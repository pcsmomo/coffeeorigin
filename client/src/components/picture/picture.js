import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <div className="pictureScene scene">
        <div className="frame">
          <img src={"images/" + this.props.file} alt="" />
        </div>
      </div>
    );
  }
}

export default Picture;
