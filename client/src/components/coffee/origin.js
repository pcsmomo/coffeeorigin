import React, { Component } from "react";
import ReactDom from "react-dom";

class Origin extends Component {
  componentDidMount() {
    // jQuery problem solved.
    // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#using-global-variables
    const $ = window.$;
    const el = ReactDom.findDOMNode(this.display);
    $(el)
      .vectorMap({
        map: "world_mill_en",
        series: {
          regions: [
            {
              scale: {
                red: "#ff0000"
              },
              attribute: "fill",
              values: {
                NI: "red"
              }
            }
          ]
        }
      })
      .vectorMap("set", "focus", {
        scale: 4,
        lat: 12.865416,
        lng: -85.207229,
        animate: true
      });
  }

  render() {
    return (
      <div className="coffeeInfo weave">
        <div className="firstDiv">
          <h3 className="name">{this.props.origin.oname}</h3>
          <div ref={display => (this.display = display)} className="map" />
        </div>
        <div className="divider" />
        <div className="secondDiv">
          <div className="flavorNotes">"{this.props.origin.flavorNotes}"</div>
          <div className="use">single origin for {this.props.origin.use}</div>
          <div className="process">{this.props.origin.process}</div>
          <div className="roastery">by {this.props.origin.roastery}</div>
        </div>
      </div>
    );
  }
}

export default Origin;
