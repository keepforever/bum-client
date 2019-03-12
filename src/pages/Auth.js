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
      <br />
      <div style={{color: 'cornsilk', fontSize: 26, lineHeight: 1.5}}>
        Note:
        <br />
        <br />
        I've noticed the <strong>FREE</strong> endpoint on which I host my server is very slow to respond for the first time each day.  If you are not redirected to the home page after a login attempt, please wait about 1 min, then try again.
        <br/>
        <br/>
        Once the server 'wakes up', it is very responsive and the application should work as normal.
      </div>
    </div>
  );
};
