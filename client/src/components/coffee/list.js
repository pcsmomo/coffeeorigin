import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrigins } from "../../actions";

class List extends Component {
  componentDidMount() {
    this.props.fetchOrigins();
  }

  renderOrigins() {
    return Array.prototype.map.call(this.props.origins, ori => {
      return (
        <div key={ori.oid}>
          <div>{ori.name}</div>
          <div>{ori.origin}</div>
        </div>
      );
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
