import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
// redux
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// graphql
import ADD_DECK_MUTATION from "../graphql/m/ADD_DECK_MUTATION";
// material ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login(props) {
  // console.log("AddDeck.js, props = ", props, "\n");

  const [values, setValues] = useState({
    deckName: "",
    deckDetails: "",
    deckList: "",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const addDeckMutation = useMutation(ADD_DECK_MUTATION, {
    variables: {
      ...values
    },
    update: async (proxy, result) => {
      console.log("result = ", result, "\n");
      //
      // const isSuccess = !!result.data.addDeck;
      // console.log('isSuccess = ', isSuccess, '\n' )
      //
      // if(isSuccess) {
      //   console.log('isSuccess = ', isSuccess, '\n' )
      // } else {
      //   setValues({
      //     ...values,
      //     didLoginFail:true
      //   })
      // }
    }
  });

  const { deckList, deckDetails, deckName } = values;

  console.log('values = ', values, '\n' )

  return (
    <div style={{ width: 500, display: "flex", flexDirection: "column" }}>
      <TextField
        label="Deck Name"
        value={deckName}
        onChange={handleChange("deckName")}
        margin="normal"
        variant="filled"
      />
      <TextField
        multiline
        label="Deck Details"
        value={deckDetails}
        onChange={handleChange("deckDetails")}
        margin="normal"
        variant="filled"
      />
      <TextField
        multiline
        label="Deck List"
        value={deckList}
        onChange={handleChange("deckList")}
        margin="normal"
        variant="filled"
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => addDeckMutation()}
      >
        AddDeck
      </Button>
      {/* didLoginFail && <h2>incorrect email or password</h2> */}
    </div>
  );
}

export default Login;
