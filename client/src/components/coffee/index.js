import React, { Component } from "react";
import { Link } from "react-router-dom";

class Coffee extends Component {
  render() {
    return (
      <div>
        <div>What Coffee we have?</div>
        <Link to={"/list"}>Go to the List</Link>
      </div>
    );
  }
}

export default Coffee;