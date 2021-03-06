import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setAuthTrue } from "../store/actions/auth";
// graphql
import LOGIN_MUTATION from "../graphql/m/LOGIN_MUTATION";
// material ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login(props) {
  // setTimeout(() => {
  //   console.log('auto Login = ', '\n' )
  //   loginMutation();
  // }, 1000);

  // console.log("Login.js, props = ", props, "\n");
  const { setAuthTrueAction } = props;

  const setToken = token => {
    sessionStorage.setItem("bumtoken", token);
  };

  const [values, setValues] = useState({
    email: "candy",
    password: "candy",
    didLoginFail: false
  });

  const { email, password, didLoginFail } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const loginMutation = useMutation(LOGIN_MUTATION, {
    variables: {
      ...values
    },
    update: async (proxy, result) => {
      // console.log("result = ", result, "\n");

      const isSuccess = !!result.data.login.payload;
      // console.log('isSuccess = ', isSuccess, '\n' )

      if (isSuccess) {
        console.log("hello successful login = ", result, "\n");
        props.history.push("/home");
        setToken(result.data.login.payload.token);
        setAuthTrueAction();
      } else {
        setValues({
          ...values,
          didLoginFail: true
        });
      }
    }
  });

  return (
    <div style={{ width: 500, display: "flex", flexDirection: "column" }}>
      <TextField
        label="Email"
        value={email}
        onChange={handleChange("email")}
        margin="normal"
        variant="filled"
      />
      <TextField
        label="Password"
        value={password}
        onChange={handleChange("password")}
        margin="normal"
        variant="filled"
      />
      <br/>
      <Button variant="outlined" onClick={() => loginMutation()}>
        LOGIN
      </Button>
      {didLoginFail && <h2>incorrect email or password</h2>}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setAuthTrueAction: setAuthTrue
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Login);
