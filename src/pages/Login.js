import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import LOGIN_MUTATION from "../graphql/m/LOGIN_MUTATION";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';


export default props => {
  console.log("Login.js, props = ", props, "\n");

  const setToken = token => {
    sessionStorage.setItem("bumtoken", token);
  };

  const [values, setValues] = useState({
    email: "b",
    password: "b"
  });

  const { email, password } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const loginMutation = useMutation(LOGIN_MUTATION, {
    variables: {
      ...values
    },
    update: async (proxy, result) => {
      console.log("result = ", result, "\n");

      const isSuccess = !!result.data.login.payload;
      console.log('isSuccess = ', isSuccess, '\n' )

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
        LOGIN
      </Button>
    </div>
  );
};
