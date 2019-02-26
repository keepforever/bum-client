import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
import { setAuthFalse } from "../store/actions/auth";
import { bindActionCreators } from "redux";
import ME_QUERY from "../graphql/q/ME_QUERY";

class Home extends Component {
  render() {
    // console.log('Home.js, this.props = ', this.props, '\n' )
    const {
      meQuery: { loading },
      setAuthFalseAction
    } = this.props;

    console.log("loading = ", loading, "\n");

    if (loading) return <h1>Loading...</h1>;
    console.log("this.props = ", this.props, "\n");
    return (
      <div>
        <h1>Hello Home Page</h1>
        <button
          style={{ width: "300px", height: "65px", fontSize: "32px" }}
          onClick={() => {
            setAuthFalseAction();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setAuthFalseAction: setAuthFalse
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(
  compose(
    graphql(ME_QUERY, {
      name: "meQuery"
    })
  )(Home)
);
