import React from "react";
// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setAuthFalse } from "../store/actions/auth";
// apollo
import { useApolloClient } from 'react-apollo-hooks';

function Logout(props) {
  const client = useApolloClient();

  console.log("Logout props = ", props, "\n");
  sessionStorage.setItem("bumtoken", "youAreLoggedOutNow")
  props.setAuthFalseAction();
  client.clearStore();
  props.history.push("/add");

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
