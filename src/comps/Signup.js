import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import REGISTER_MUTATION from "../graphql/m/REGISTER_MUTATION";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

export default props => {

  // console.log("Signup.js, props = ", props, "\n");

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
      console.log("result = ", result, "\n");

      // const loginToken = await result.data.login.payload.token;
      // if (loginToken) {
      //   setToken(loginToken);
      // }
      // console.log('loginToken = ', loginToken, '\n' )
      // // nav home after successful login
      // if(loginToken){
      //   props.history.push("/home");
      // } else {
      //   console.log('bad Login', '\n' )
      // }
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
      <Button
        variant="outlined"
        color="primary"
        onClick={() => loginMutation()}
      >
        CREATE ACCOUNT
      </Button>
    </div>
  );
};
