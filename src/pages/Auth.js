import React, { useState } from "react";
// material-ui
import Button from '@material-ui/core/Button';
// views
import Login from '../comps/Login';
import Signup from '../comps/Signup';


export default props => {
  // console.log("Auth.js, props = ", props, "\n");

  const [values, setValues] = useState({
    isLogin: true,
  });

  const { isLogin } = values;

  return (
    <div style={{ width: '500px', display: "flex", flexDirection: "column" }}>
      { isLogin && <Login {...props}/>}
      { !isLogin && <Signup {...props}/>}
      <br/>
      <br/>
      <Button
        variant="outlined"
        onClick={() => {
          setValues({ ...values, isLogin: !isLogin })}
        }
      >
        {isLogin ? "Create An Account" : "Login"}
      </Button>
    </div>
  );
};
