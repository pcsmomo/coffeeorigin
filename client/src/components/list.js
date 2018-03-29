import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrigins, fetchCountries } from "../actions";

import Origin from "./coffee/origin";
import Blend from "./coffee/blend";
import Picture from "./picture/picture";

let toggle = true; // for not mixing the end node.
const reArrange = () => {
  let listElm = document.getElementById("list");
  let sceneList = document.getElementsByClassName("scene");
  let listLen = sceneList.length;
  // picking one node up and put into the middle of list, except the end node
  for (let i = 0; i < 5; i++) {
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
    for (let i = 0; i <= 100; i++) keyFrameSlide.deleteRule(`${i}%`);

    // declare variables
    let sceneList = document.getElementsByClassName("scene");
    let listLen = sceneList.length;
    let curPercentage = 0;
    let curMarginTop = 0;

    let intervalPct = Math.floor(100 / listLen); // 100 % / length
    let transitionPct = Math.floor(intervalPct * 0.2); // transition time is 1/5

    // for loop until before the last loop
    for (let i = 0; i < listLen - 1; i++) {
      keyFrameSlide.appendRule(
        `${curPercentage}% {margin-top: ${curMarginTop}px; }`
      );
      curPercentage += intervalPct;
      keyFrameSlide.appendRule(
        `${curPercentage - transitionPct}% {margin-top: ${curMarginTop}px; }`
      );
      curMarginTop -= marginTop;
    }

    // last percentage to make 100%
    keyFrameSlide.appendRule(
      `${curPercentage}% {margin-top: ${curMarginTop}px; }`
    );
    curPercentage += intervalPct;
    keyFrameSlide.appendRule(`100% {margin-top: ${curMarginTop}px; }`);

    // console.log(keyFrameSlide.cssText);
  }
};

const getInterval = second => {
  let sceneList = document.getElementsByClassName("scene");
  return sceneList.length * second; // scenes * second
};

const setAnimationTime = interval => {
  let listElm = document.getElementById("list");
  listElm.style.animation = `slide ${interval}s infinite alternate`;
};

class List extends Component {
  componentDidMount() {
    this.props.fetchCountries(); // * 비동기의 문제로, fetchCountries 가 끝나기 전에 findCountry가 실행된 경우 오류 발생.
    this.props.fetchOrigins();

    setTimeout(() => {
      let interval = getInterval(6); // seconds for a scene.
      setInterval(reArrange, interval * 1000);
      // setAnimationTime(interval);
      // initiateKeyFrame();
    }, 1000); // Not working because
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
      <div id="list">
        {this.renderOrigins()}
        <Picture file="imgCrew1.JPG" />
        <Picture file="imgBrew.JPG" />
        <Blend />
        <Picture file="imgFamily.JPG" />
        <Picture file="imgTigerCar.JPG" />
        {this.renderOrigins()}
        <Picture file="imgVonnie.png" />
        <Picture file="imgCrew2.JPG" />
        <Picture file="imgRMA.png" />
        <Blend />
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
