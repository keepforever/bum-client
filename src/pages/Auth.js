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
      <h4 style={{color: 'cornsilk'}}>Note, I am hosting my GraphQL server on zeit.co/now's free tier and I've noticed this behavior that, when you haven't made a request in awhile(i.e. over night), the server 'goes to sleep', so, when you try to login in will respond with a 404 after a delay.  But, once the server gets a couple requests it 'wakes up' and is responsive.  If your login or create account action fails, just refresh the page and try again.</h4>
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
