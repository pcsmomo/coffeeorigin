import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrigins } from "../../actions";

import Origin from "./origin";

class List extends Component {
  componentDidMount() {
    this.props.fetchOrigins();
  }

  renderOrigins() {
    return Array.prototype.map.call(this.props.origins, origin => {
      return <Origin origin={origin} key={origin.cid} />;
    });
  }

  render() {
    return <div>{this.renderOrigins()}</div>;
  }
}

const mapStateToProps = ({ origins }) => {
  return { origins };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrigins: () => {
      dispatch(fetchOrigins());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
