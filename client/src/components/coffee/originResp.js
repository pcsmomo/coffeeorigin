import React, { Component } from "react";
import ReactDom from "react-dom";

class Origin extends Component {
  componentDidMount() {
    // jQuery problem solved.
    // https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#using-global-variables

    const $ = window.$;
    const el = ReactDom.findDOMNode(this.display);

    let countryColor = {};
    let ccode = this.props.country.ccode;
    countryColor[ccode] = "red";

    let countryLocation = {
      scale: this.props.country.scale,
      lat: this.props.country.latitude,
      lng: this.props.country.longitude,
      animate: true
    };

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
              values: countryColor
            }
          ]
        }
      })
      .vectorMap("set", "focus", countryLocation);
  }

  render() {
    return (
      <div className="coffeeInfoResp scene">
        <div className="firstDiv">
          <h3 className="name">
            <img
              className="imgFlag"
              src={"images/flags/" + this.props.origin.ccode + ".png"}
              alt={this.props.origin.origin}
            />
            {this.props.origin.oname}
          </h3>
          <div className="use">single origin for {this.props.origin.use}</div>
          <div ref={display => (this.display = display)} className="map" />
        </div>
        <div className="secondDiv">
          <div className="flavorNotes">"{this.props.origin.flavorNotes}"</div>
          {this.props.origin.description ? (
            <div className="description">{this.props.origin.description}</div>
          ) : (
            ""
          )}

          {this.props.origin.region ? (
            <div className="region">Region: {this.props.origin.region}</div>
          ) : (
            ""
          )}
          {this.props.origin.variety ? (
            <div className="variety">Variety: {this.props.origin.variety}</div>
          ) : (
            ""
          )}
          {this.props.origin.process ? (
            <div className="process">Process: {this.props.origin.process}</div>
          ) : (
            ""
          )}
          {this.props.origin.altitude ? (
            <div className="altitude">
              Altitude: {this.props.origin.altitude}
            </div>
          ) : (
            ""
          )}
          <div className="roastery">
            <span>by {this.props.origin.roastery}</span>
            <img src="images/coffee/WOR_Logo.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Origin;
