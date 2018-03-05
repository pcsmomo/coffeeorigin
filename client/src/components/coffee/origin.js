import React, { Component } from "react";

class Origin extends Component {
  render() {
    return (
      <div className="coffeeInfo">
        <div className="firstDiv">
          <h3 className="name">{this.props.origin.name}</h3>
          <div className="map">map</div>
        </div>
        <div className="secondDiv">
          <div className="flavorNote">{this.props.origin.flavorNote}</div>
          <div className="use">{this.props.origin.use}</div>
          <div className="process">{this.props.origin.process}</div>
        </div>
      </div>
    );
  }
}

export default Origin;
