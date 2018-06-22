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
                BR: "red",
                TZ: "red"
              }
            }
          ]
        }
      })
      .vectorMap("set", "focus", {
        regions: ["CO", "BR", "TZ"],
        animate: true
      });
  }

  render() {
    return (
      <div className="coffeeInfoResp scene">
        <div className="firstDiv">
          <h3 className="name">
            <img
              id="imgShady01"
              src="images/coffee/WOR_Retail_Web_Shady1.0.jpg"
              alt=""
            />Shady Lane<img
              id="imgShady01"
              src="images/coffee/Shady+Lane+Rat.jpg"
              alt=""
            />
            <br />
            <span>Colombia, Tanzania and Brazil</span>
          </h3>
          <div ref={display => (this.display = display)} className="map" />
        </div>
        <div className="divider" />
        <div className="secondDiv">
          <div className="flavorNotes">
            "Big, bold chocolates & caramels with toffee and cherry sweetness."
          </div>
          <div className="use">
            blend for <span className="flux">espresso</span> with milk
          </div>
          <div className="roastery">
            <span>by wide open road roastery</span>
            <img src="images/coffee/WOR_Logo.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Blend;
