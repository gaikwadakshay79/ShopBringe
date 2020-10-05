import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

function ItemList({itemList,onDelete}) {
  return (
    <div className="row p-3">
      {" "}
      {itemList.map(item => (
        <Item key={item.id} name={item.item_name} price={item.price} onDelete={onDelete} id={item.id} image={item.image}/>
      ))}{" "}
    </div>
  );
}

export default ItemList;
