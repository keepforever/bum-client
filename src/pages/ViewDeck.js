import React from "react";
// import { useApolloClient } from "react-apollo-hooks";
// import ALL_DECKS_QUERY from "../graphql/q/ALL_DECKS_QUERY";

export default props => {
  // one way to get deck from params
  // const client = useApolloClient();
  // const { id } = props.match.params;
  // const { allDecks } = client.readQuery({
  //   query: ALL_DECKS_QUERY
  // });
  // const deckObj = allDecks.filter(d => {
  //   return d.id === id;
  // })[0]

  const { deck } = props.location.state

  console.log('deck = ', deck, '\n' )


  return (
    <div>
      <h1>Hello ViewDeck</h1>
    </div>
  );
};
