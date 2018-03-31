import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrigins, fetchCountries } from "../actions";

import Origin from "./coffee/origin";
import Blend from "./coffee/blend";
import Picture from "./picture/picture";

let toggle = true; // for not mixing the end node.
const reArrange = count => {
  let listElm = document.getElementById("sceneList");
  let sceneList = document.getElementsByClassName("scene");
  let listLen = sceneList.length;
  // picking one node up and put into the middle of list, except the end node
  for (let i = 0; i < count; i++) {
    let idx;
    if (toggle) {
      idx = Math.floor(Math.random() * (listLen - 1));
      listElm.insertBefore(sceneList[idx], listElm.children[0]);
    } else {
      idx = Math.floor(Math.random() * (listLen - 1)) + 1;
      listElm.insertBefore(sceneList[idx], listElm.children[1]);
    }
  }
  toggle = !toggle;
};

const getKeyframesRule = ruleName => {
  let ss = document.styleSheets,
    rule,
    i,
    x;

  for (i = 0; i < ss.length; ++i) {
    if (ss[i].cssRules) {
      // loop through all the rules
      for (x = 0; x < ss[i].cssRules.length; ++x) {
        rule = ss[i].cssRules[x];
        if (
          (rule.type === window.CSSRule.KEYFRAMES_RULE ||
            rule.type === window.CSSRule.WEBKIT_KEYFRAMES_RULE) &&
          rule.name === ruleName &&
          rule.cssText.startsWith("@keyframes")
        ) {
          return rule;
        }
      }
    }
  }
  return null;
};

const initiateKeyFrame = () => {
  let marginTop = 735; // same as the height of a scene

  let keyFrameSlide = getKeyframesRule("slide");

  if (keyFrameSlide !== null) {
    // delete all rules on the keyframe
    for (let i = 0; i <= 1000; i++) keyFrameSlide.deleteRule(`${i / 10}%`);

    // declare variables
    let sceneList = document.getElementsByClassName("scene");
    let listLen = sceneList.length;
    let curPercentage = 0;
    let curMarginTop = 0;

    let intervalPct = Math.round(100 / listLen * 10) / 10; // 100 % / length
    let transitionPct = Math.round(intervalPct * 0.2 * 10) / 10; // transition time is 1/5

    // for loop until before the last loop
    for (let i = 0; i < listLen; i++) {
      if (i > 0) curPercentage += transitionPct;

      keyFrameSlide.appendRule(
        `${curPercentage}% {margin-top: ${curMarginTop}px; }`
      );

      if (i === 0) curPercentage += intervalPct - Math.floor(transitionPct / 2);
      else if (i >= listLen - 1) curPercentage = 100;
      else curPercentage += intervalPct - transitionPct;

      keyFrameSlide.appendRule(
        `${curPercentage}% {margin-top: ${curMarginTop}px; }`
      );

      curMarginTop -= marginTop;
    }
  }
};

const getInterval = second => {
  let sceneList = document.getElementsByClassName("scene");
  return sceneList.length * second; // scenes * second
};

const setAnimationTime = interval => {
  let listElm = document.getElementById("sceneList");
  listElm.style.animation = `slide ${interval}s infinite alternate`;
};

class Show extends Component {
  componentDidMount() {
    this.props.fetchCountries(); // * 비동기의 문제로, fetchCountries 가 끝나기 전에 fetchOrigins가 실행된 경우 오류 발생.
    this.props.fetchOrigins();

    setTimeout(() => {
      let interval = getInterval(10); // seconds for a scene.
      setInterval(reArrange(20), interval * 1000);
      setAnimationTime(interval);
      initiateKeyFrame();
    }, 2000); // Not working because
  }

  findCountry(ccode) {
    return Array.prototype.find.call(this.props.countries, elm => {
      return elm.ccode === ccode;
    });
  }

  renderOrigins() {
    return Array.prototype.map.call(this.props.origins, origin => {
      return (
        <Origin
          key={origin.oid}
          origin={origin}
          country={this.findCountry(origin.ccode)}
        />
      );
    });
  }

  render() {
    return (
      <div className="sceneContainer">
        <div id="sceneList">
          {this.renderOrigins()}
          <Picture file="imgCrew3.JPG" />
          <Picture file="imgSpecial.jpg" />
          <Blend />
          <Picture file="imgBrew.JPG" />
          <Picture file="imgCrew1.JPG" />
          {this.renderOrigins()}
          <Picture file="imgTigerCar.JPG" />
          <Picture file="imgBicycles.jpg" />
          <Blend />
          <Picture file="imgOldBuilding.jpg" />
          <Picture file="imgSavoryRoll.jpg" />
          {this.renderOrigins()}
          <Picture file="imgRMA.png" />
          <Blend />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ origins, countries }) => {
  return { origins, countries };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrigins: () => {
      dispatch(fetchOrigins());
    },
    fetchCountries: () => {
      dispatch(fetchCountries());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
