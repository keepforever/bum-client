import React, { useState } from "react";
// redux
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// graphql
import ADD_DECK_MUTATION from "../graphql/m/ADD_DECK_MUTATION";
// material ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// apollo
import { useMutation, useApolloClient } from "react-apollo-hooks";
// spinner
import { PacmanLoader } from "react-spinners";
import { SpinnerContainer } from "../styled/add";

const defaultState = {
  deckName: "",
  deckDetails: "",
  deckList: "",
  errorAdd: false,
  successAdd: false,
  isSubmitting: false
};
function Login(props) {
  // console.log("AddDeck.js, props = ", props, "\n");

  const [values, setValues] = useState({
    ...defaultState
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const addDeckMutation = useMutation(ADD_DECK_MUTATION, {
    variables: {
      ...values
    },
    updateQueries: ["allDecks"],
    update: async (proxy, result) => {
      console.log("result = ", result, "\n");

      const {
        data: { addDeck }
      } = result;

      if (addDeck === "error fatal") {
        setValues({ ...defaultState, errorAdd: true });
      } else {
        setValues({ ...defaultState, successAdd: true });

      }
    }
  });

  const { deckList, deckDetails, deckName } = values;
  const client = useApolloClient();
  // console.log('values = ', values, '\n' )

  // console.log("props = ", props, "\n");

  if (values.isSubmitting) {
    return (
      <div
        style={{
          marginTop: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "20vw",
          width: "50vw"
        }}
      >
        <SpinnerContainer>
          <h2>Working on it...</h2>
          <PacmanLoader size={50} color="yellow"/>
        </SpinnerContainer>
      </div>
    );
  }
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
        disabled={values.isSubmitting}
        variant="outlined"
        color="primary"
        onClick={() => {
          setValues({ ...values, isSubmitting: true });
          addDeckMutation();
        }}
      >
        AddDeck
      </Button>
      {values.successAdd ? <h3>Great work! Go on, add another!</h3> : null}
      {values.errorAdd ? <h3>Oops, something went wrong</h3> : null }
    </div>
  );
}

export default Login;
