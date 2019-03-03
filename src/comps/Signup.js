import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import REGISTER_MUTATION from "../graphql/m/REGISTER_MUTATION";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setAuthTrue } from "../store/actions/auth";

function Signup(props) {

  // console.log("Signup.js, props = ", props, "\n");
  const { setAuthTrueAction } = props;

  const setToken = token => {
    sessionStorage.setItem("bumtoken", token);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const { name, email, password } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const loginMutation = useMutation(REGISTER_MUTATION, {
    variables: {
      ...values
    },
    update: async (proxy, result) => {

      const isSuccess = !!result.data.userSignup.token;
      // console.log('isSuccess = ', isSuccess, '\n' )

      if (isSuccess) {
        console.log("hello successful userSignup = ", result, "\n");
        props.history.push("/home");
        setToken(result.data.userSignup.token);
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
        label="Name"
        value={name}
        onChange={handleChange("name")}
        margin="normal"
        variant="filled"
      />
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
      <Button
        variant="outlined"
        onClick={() => loginMutation()}
      >
        CREATE ACCOUNT
      </Button>
    </div>
  );
};

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
)(Signup);
