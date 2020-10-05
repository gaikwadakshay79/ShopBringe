import React, { useState, useEffect } from "react";
import ItemInput from "./ItemInput/ItemInput";
import ItemList from "./ItemList/ItemList";
import axios from "axios";
import "./Home.css";

function Home() {
  const URL = "http://localhost:8000/item/";
  const [itemList, setItemList] = useState([]);
  function handleOnDelete(id) {
    axios.delete(URL + id + "/").then(res => {
      updateItemList();
    });
  }
  function handleOnAdd(item) {
    axios.post(URL, item).then(res => {
      updateItemList();
    });
  }

  function updateItemList() {
    axios.get(URL).then(res => {
      setItemList(res.data);
    });
  }
  useEffect(() => {
    updateItemList();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <ItemInput handleOnAdd={handleOnAdd} />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-8 col-lg-9">
          <ItemList itemList={itemList} onDelete={handleOnDelete} />
        </div>
      </div>
    </div>
  );
}

export default Home;
