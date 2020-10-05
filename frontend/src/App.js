import React from "react";
import Home from "./Components/Home/Home";
import Page from "./Components/Page/Page";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/item/:id" component={Page} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
