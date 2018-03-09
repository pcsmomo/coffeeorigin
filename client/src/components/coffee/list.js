import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrigins, fetchCountries } from "../../actions";

import Origin from "./origin";

class List extends Component {
  componentDidMount() {
    this.props.fetchOrigins();
    this.props.fetchCountries();
  }

  renderOrigins() {
    return Array.prototype.map.call(this.props.origins, origin => {
      return <Origin key={origin.oid} origin={origin} />;
    });
  }

  render() {
    return <div id="list">{this.renderOrigins()}</div>;
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
