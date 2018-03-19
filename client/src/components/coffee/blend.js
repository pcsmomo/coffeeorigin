import React, { Component } from "react";
import ReactDom from "react-dom";

class Blend extends Component {
  componentDidMount() {
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
                CO: "red",
                ID: "red",
                TZ: "red"
              }
            }
          ]
        }
      })
      .vectorMap("set", "focus", {
        regions: ["CO", "ID", "TZ"],
        animate: true
      });
  }

  render() {
    return (
      <div className="coffeeInfo starryNight">
        <div className="firstDiv">
          <h3 className="name">
            Shady Lane
            <br />
            <span>Colombia, Tanzania and Indonesia</span>
          </h3>
          <div ref={display => (this.display = display)} className="map" />
        </div>
        <div className="divider" />
        <div className="secondDiv">
          <div className="flavorNotes">
            "Big, bold chocolates & caramels with toffee and cherry sweetness."
          </div>
          <div className="use">blend for espresso</div>
          <div className="roastery">by wide open road roastery</div>
        </div>
      </div>
    );
  }
}

export default Blend;
