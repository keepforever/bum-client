import React, { useState } from "react";
import { Col } from "../styled/shared";
import TextField from "@material-ui/core/TextField";

function AboutTest(props) {
  const [values, setValues] = useState({
    text: "test"
  });

  const { test } = values;

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Col>
        <a
          style={{
            color: "cornsilk",
            fontSize: 22,
            margin: "10px 0px"
          }}
          target="_blank"
          href={`https://www.google.com/search?&q=${test}`}
        >
          click me
        </a>
        <TextField
          label="Test"
          value={test}
          onChange={handleChange("test")}
          margin="normal"
          variant="filled"
        />
        <h2 style={{color: 'cornsilk'}}>{test}</h2>
      </Col>
    </div>
  );
}

export default AboutTest;


// and it would be a good idea to encode it

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
//
// <a target="_blank" href={`https://www.google.com/search?&q=${encodeURI(myQuery)}`}>click me</a>
