import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrigins, fetchCountries } from "../../actions";

import Origin from "./origin";
import Blend from "./blend";

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

class List extends Component {
  componentDidMount() {
    this.props.fetchCountries(); // * 비동기의 문제로, fetchCountries 가 끝나기 전에 findCountry가 실행된 경우 오류 발생.
    this.props.fetchOrigins();
    setInterval(reArrange, 13000);
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
