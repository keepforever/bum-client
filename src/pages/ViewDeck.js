import React from "react";
import FadeIn from "react-lazyload-fadein";
// styled
import { Row } from "../styled/viewDeck";

export default props => {
  console.log("ViewDeck.js, props` = ", props, "\n");

  const {
    deckName,
    deckDetails,
    deckList,
    score,
    author: { name }
  } = props.location.state;

  const cardNames = Object.keys(deckList);

  console.log("cardNames = ", cardNames, "\n");

  return (
    <div
      style={{
        width: "95vw"
      }}
    >
      <h1>Deck Name: {deckName}</h1>
      <h2>author: {name}</h2>
      <hr />
      <div style={{ border: "2px solid black", padding: 15 }}>
        <h3>About: </h3>
        <p>{deckDetails}</p>
      </div>
      <h3>
        deckName: {deckName}, score: {score}
      </h3>
      <Row>
        {cardNames.map(c => {
          return (
            <div style={{marginRight: "15px"}} key={deckList[c].name}>
              <p>
                {deckList[c].name}: x {deckList[c].quantity}
              </p>
              <FadeIn height={600}>
                {onload => (
                  <img
                    alt="nope"
                    src={
                      deckList[c].imageUrl
                        ? deckList[c].imageUrl
                        : "https://picsum.photos/200/300/?random"
                    }
                    onLoad={onload}
                    style={{
                      height: 352,
                      width: 252
                    }}
                  />
                )}
              </FadeIn>
            </div>
          );
        })}
      </Row>
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
