import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Page.css";

function Page(state) {
  const URL = "http://localhost:8000/item/";
  const [item, setItem] = useState(false);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  function updateItemList() {
    axios
      .get(URL + state.match.params.id)
      .then(res => {
        setItem(true);
        setName(res.data.item_name);
        setPrice(res.data.price);
        setImage(res.data.image);
      })
      .catch(error => {
        setItem(false);
      });
  }
  useEffect(() => {
    updateItemList();
  }, []);
  return (
    <div>
      {item && (
        <div className="container shadow p-2">
          <div className="row">
            <div className="col-6 w-100 h-100">
              <img className="img w-100 h-100" src={image}></img>
            </div>
            <div className="col-6 w-100 h-100 d-flex flex-column justify-content-between">
              <h1>{name}</h1>
              <h2>{price + " $"}</h2>
              <button
                className="btn btn-warning w-100"
                onClick={e => {
                  window.location = "/";
                }}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
