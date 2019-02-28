import React from "react";
// redux
// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setAuthFalse } from "../store/actions/auth";

function Logout(props) {
  console.log("Logout props = ", props, "\n");
  sessionStorage.setItem("bumtoken", "youAreLoggedOutNow")
  props.setAuthFalseAction();
  props.history.push("/auth");

  return <h1>Logging Out</h1>;
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
)(Logout);
