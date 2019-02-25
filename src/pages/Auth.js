import React, { useState, Suspense } from "react";
// material-ui
import Button from '@material-ui/core/Button';
// views
import Login from './Login';
import Signup from './Signup';


export default props => {
  console.log("Auth.js, props = ", props, "\n");

  const setToken = token => {
    sessionStorage.setItem("bumtoken", token);
  };

  const [values, setValues] = useState({
    isLogin: true,
  });

  const { isLogin } = values;

  return (
    <div style={{ width: 500, display: "flex", flexDirection: "column" }}>
      { isLogin && <Login {...props}/>}
      { !isLogin && <Signup {...props}/>}
      <br/>
      <br/>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => {
          setValues({ ...values, isLogin: !isLogin })}
        }
      >
        {isLogin ? "Create An Account" : "Go to Login"}
      </Button>
    </div>
  );
};
