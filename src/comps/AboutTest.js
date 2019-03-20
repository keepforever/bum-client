import React, { useState } from "react";
import { Col } from "../styled/shared";
import TextField from "@material-ui/core/TextField";
// custom hook?
import { useChangeText } from "../hooks";

function AboutTest(props) {
  const [values, setValues] = useState({
    text: "test",
    hookText: "hookText"
  });

  const { test, hookText } = values;

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
          rel="noopener noreferrer"
          href={`https://www.google.com/search?&q=${test}`}
        >
          click me
        </a>
        <TextField
          label="Test"
          value={test}
          onChange={e => useChangeText("test", e.target.value, setValues, values)}
          margin="normal"
          variant="filled"
        />
        <TextField
          label="Hook"
          value={hookText}
          onChange={e => useChangeText("hookText", e.target.value, setValues, values)}
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
