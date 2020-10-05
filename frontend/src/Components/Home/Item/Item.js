import React from "react";
import "./Item.css";

function Item() {
  return (
        <div className="item_input card col-xs-12 col-sm-6 col-md-6 col-lg-3 p-0">
        <img
          className="card-img-top shadow"
          alt="..."
          src="https://icon-library.net/images/upload-photo-icon/upload-photo-icon-21.jpg"
        />
        <div className="card-body">
          <h4>item Name</h4>
          <h5>322.22$</h5>
          <button className="button-item btn btn-danger w-100"> Remove</button>
        </div>
        

      </div>
  );
}

export default Item;
