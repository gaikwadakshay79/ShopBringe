import React from "react";
import ItemInput from "./ItemInput/ItemInput";
import ItemList from "./ItemList/ItemList";
import "./Home.css";

function Home() {
  const itemList = [
    {
      id: 1,
      item_name: "item_name1",
      price: "11.22",
      image: "src"
    },
    {
      id: 2,
      item_name: "item_name1",
      price: "11.22",
      image: "src"
    },
    {
      id: 3,
      item_name: "item_name1",
      price: "11.22",
      image: "src"
    },
    {
      id: 4,
      item_name: "item_name1",
      price: "11.22",
      image: "src"
    },
    {
      id: 5,
      item_name: "item_name1",
      price: "11.22",
      image: "src"
    },
    {
      id: 6,
      item_name: "item_name1",
      price: "11.22",
      image: "src"
    }
  ];
  function handleOnDelete(id){
      console.log(id)
  }
  function handleOnAdd(item){
    console.log(item)
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <ItemInput handleOnAdd={handleOnAdd}/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9">
          <ItemList itemList={itemList} onDelete={handleOnDelete}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
