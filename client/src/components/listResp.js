import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrigins, fetchCountries } from "../actions";

import Origin from "./coffee/originResp";
import Blend from "./coffee/blendResp";

class ListResp extends Component {
  componentDidMount() {
    this.props.fetchCountries(); // * 비동기의 문제로, fetchCountries 가 끝나기 전에 fetchOrigins가 실행된 경우 오류 발생.
    this.props.fetchOrigins();
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
      <div id="listResp">
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

export default connect(mapStateToProps, mapDispatchToProps)(ListResp);
