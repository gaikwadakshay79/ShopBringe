import React, { useState, useRef } from 'react';
import './App.css';

function App() {
    const [imgSrc, setImgSrc] = useState(null);
    const imageRef = useRef(null);
    const [itemName, setItemName] = useState("Enter Item Name");
    const [itemPrice, setItemPrice] = useState("1.00");
    const [itemError, setItemError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    function _onChange() {
        var file = imageRef.current.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            setImgSrc(reader.result);
        }
    };

    function handleNameChange(e) {
        if (e.target.value.length === 0) {
            setItemError(true);
            setItemName(e.target.value);
        }
        else {
            setItemName(e.target.value);
            setItemError(false)
        }
    }

    function handlePriceChange(e) {
        if (e.target.value.length === 0) {
            setItemPrice(0);
            setPriceError(true);
        }
        var matches = e.target.value.match(/^([0-9]+\.?[0-9]*)/gi);
        if (matches && matches.length === 1) {
            var price = parseFloat(e.target.value);
            if (price <= 0) {
                setItemPrice(0);
                setPriceError(true);
            }
            else {
                setPriceError(false);
                setItemPrice(price);
            }
        }
        else {
            setItemPrice(e.target.value)
            setPriceError(true);

        }
    }

    return (
        <div className="maindiv container shadow p-0">
            <div className="row w-100 m-0 ">
                <div className="imagediv col-2 m-4">
                    <div className="image-upload">
                        <label htmlFor="inputImage" className={imgSrc ? "d-none" : ""}>
                            {!imgSrc && <img alt="Upload" className="w-100 h-100" src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg" />}
                        </label>
                        <input
                            type="file"
                            name="inputImage"
                            id="inputImage"
                            accept="image/*"
                            multiple={false}
                            ref={imageRef}
                            onChange={_onChange}
                            className="d-none"
                        />
                    </div>
                    {imgSrc && <img src={imgSrc} alt="Upload" className="w-100 h-100" />}
                </div>
                <div className="col-9 d-flex flex-column bd-highlight p-2 justify-content-between">
                    <input type="text" name="itemName" id="itemName" value={itemName} onChange={e => { handleNameChange(e) }} />
                    {itemError && <div className="alert alert-danger">Enter Valid Item Name</div>}
                    <input type="number" name="itemPrice" id="itemPrice" value={itemPrice} onChange={e => { handlePriceChange(e) }} />
                    {priceError && <div className="alert alert-danger">Enter Valid Item Price</div>}
                    <button className="add_button" disabled={priceError || itemError}>Add Item</button>
                </div>

            </div>
        </div>
    );
}

export default App;