import React from "react";
// styled
import { Container } from "../styled/add";
// local
import AddDeck from "../comps/AddDeck";
// apollo
// import { useApolloClient } from 'react-apollo-hooks';

export default props => {
  // const client = useApolloClient()
  // console.log('client = ', client, '\n' )
  return (
    <Container>
      <h1>Add a Deck!</h1>
      <AddDeck />
    </Container>
  );
};
