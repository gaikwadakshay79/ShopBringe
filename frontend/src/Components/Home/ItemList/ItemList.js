import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({itemList}) {
  return (
    <div className="row p-3">
      {" "}
      {itemList.map(number => (
        <Item key={number} />
      ))}{" "}
    </div>
  );
}

export default ItemList;
