import React from "react";
import "./Item.css";
import no_image from "./no_image.jpg";

function Item({ name, price, image, onDelete, id }) {
  return (
    <div className="item_input card col-xs-12 col-sm-6 col-md-6 col-lg-3 p-0">
      <img
        className="card-top shadow"
        alt="..."
        src={image || no_image}
        onClick={e => {
          window.location = "/item/" + id;
        }}
      />
      <div className="card-body d-flex flex-column justify-content-end">
        <h5>{name}</h5>
        <h6>{price + " $"}</h6>
        <button
          className="button-item btn btn-danger w-100"
          onClick={e => onDelete(id)}
        >
          {" "}
          Remove
        </button>
      </div>
    </div>
  );
}

export default Item;
