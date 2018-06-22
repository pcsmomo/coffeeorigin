import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Coffee from "./coffee";
import Show from "./show";
import List from "./list";
import listResp from "./listResp";

import "../styles/css/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Coffee} />
          <Route path="/show" component={Show} />
          <Route path="/list" component={List} />
          <Route path="/listResp" component={listResp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
