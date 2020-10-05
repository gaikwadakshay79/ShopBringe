import React, { useState, useRef } from "react";
import "./ItemInput.css";
import DEFAULT_IMAGE from "./upload-photo.jpg";

function ItemInput({ handleOnAdd }) {
  const [imgSrc, setImgSrc] = useState(DEFAULT_IMAGE);
  const imageRef = useRef(null);
  const [itemName, setItemName] = useState("Enter Item Name");
  const [itemPriceL, setItemPriceL] = useState(0);
  const [itemPriceM, setItemPriceM] = useState(0);
  const [itemError, setItemError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  function _onChange() {
    var file = imageRef.current.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(e) {
      setImgSrc(reader.result);
    };
  }

  function handleNameChange(e) {
    if (e.target.value.length === 0) {
      setItemError(true);
      setItemName(e.target.value);
    } else {
      setItemName(e.target.value);
      setItemError(false);
    }
  }

  function handlePriceChangeM(e) {
    if (e.target.value.length === 0) {
      setItemPriceM(0);
      setPriceError(true);
    }
    var matches = e.target.value.match(/^-?\d+/gi);
    if (matches && matches.length === 1) {
      var price = parseInt(e.target.value);
      if (price <= 0) {
        setItemPriceM(0);
        setPriceError(false);
      } else {
        setPriceError(false);
        setItemPriceM(price);
      }
    } else {
      setItemPriceM(e.target.value);
      setPriceError(true);
    }
  }
  function handlePriceChangeL(e) {
    if (e.target.value.length === 0) {
      setItemPriceL(0);
      setPriceError(true);
    }
    var matches = e.target.value.match(/^-?\d+/gi);
    if (matches && matches.length === 1) {
      var price = parseInt(e.target.value);
      if (price <= 0) {
        setItemPriceL(0);
        setPriceError(false);
      } else {
        setPriceError(false);
        setItemPriceL(price);
      }
    } else {
      setItemPriceL(e.target.value);
      setPriceError(true);
    }
  }

  function handleImageClick() {
    imageRef.current.click();
  }

  function handleButtonClick() {
    var item = {
      item_name: itemName,
      price: parseFloat(itemPriceM + "." + itemPriceL),
      image: imgSrc === DEFAULT_IMAGE ? null : imgSrc
    };
    handleOnAdd(item);
    setImgSrc(DEFAULT_IMAGE);
    setItemName("Enter Item Name");
    setItemPriceL(0);
    setItemPriceM(0);
    setItemError(false);
    setPriceError(false);
  }

  return (
    <div className="item_input card m-3">
      <img
        className="card-img-top shadow"
        alt="..."
        src={imgSrc}
        onClick={handleImageClick}
      />
      <div className="card-body">
        <input
          type="text"
          className="card-title w-100"
          value={itemName}
          onChange={e => {
            handleNameChange(e);
          }}
        />
        {itemError && <div className="alert alert-danger">Invalid Name</div>}
        <div className="d-flex w-100 flex-row justify-content-between align-items-stretch">
          <input
            type="number"
            className="input-number"
            value={itemPriceM}
            onChange={e => {
              handlePriceChangeM(e);
            }}
          />
          <h3>.</h3>
          <input
            type="number"
            className="input-number"
            value={itemPriceL}
            onChange={e => {
              handlePriceChangeL(e);
            }}
          />
          <h3>$</h3>
        </div>
        {priceError && <div className="alert alert-danger">Invalid Price</div>}
        <button
          className="btn btn-primary my-3 w-100"
          disabled={priceError || itemError}
          onClick={e => handleButtonClick()}
        >
          Add
        </button>
      </div>
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
  );
}

export default ItemInput;
