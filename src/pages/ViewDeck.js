import React from "react";


export default props => {
  console.log('ViewDeck.js, props` = ', props, '\n' )

  const {
    deckName,
    deckDetails,
    deckList,
    score,
    author: { name }
  } = props.location.state;

  const cardNames = Object.keys(deckList)

  console.log('cardNames = ', cardNames, '\n' )

  return (
    <div>
      <h1>Hello {deckName}</h1>
      <h2>author: {name}</h2>
      <h3>
        deckName: {deckName}, score: {score}
      </h3>
      {cardNames.map(c => {
        return <p key={deckList[c].name}>
          {deckList[c].name}: x {deckList[c].quantity}
        </p>

      })}
      <br/>
      <hr/>
      <p>{deckDetails}</p>
    </div>
  );
};
// import { useApolloClient } from "react-apollo-hooks";
// import ALL_DECKS_QUERY from "../graphql/q/ALL_DECKS_QUERY";

// one way to get deck from params
// const client = useApolloClient();
// const { id } = props.match.params;
// const { allDecks } = client.readQuery({
//   query: ALL_DECKS_QUERY
// });
// const deckObj = allDecks.filter(d => {
//   return d.id === id;
// })[0]
