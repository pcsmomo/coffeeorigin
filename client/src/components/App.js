import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Coffee from "./coffee";
import CoffeeList from "./coffee/list";

import "../styles/css/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Coffee} />
          <Route path="/list" component={CoffeeList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
