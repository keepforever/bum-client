import React from "react";
import { graphql, compose } from "react-apollo";
import PAGINATED_DECKS_QUERY from "../graphql/q/PAGINATED_DECKS_QUERY";
// material-ui
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import FolderIcon from "@material-ui/icons/Folder";
// utils
import utils from "../utils";
// router
import { withRouter } from "react-router";

function PaginatedDecks(props) {
  console.log("PaginatedDecks, props = ", props, "\n");

  const viewDeck = id => {
    props.history.push(`/view-deck/${id}`, {
      id
    });
  };

  const {
    paginatedDecksQuery: { loading }
  } = props;

  if (loading) return <h1>Loading...</h1>;

  if (!props.paginatedDecksQuery.decksConnection) {
    return <h1>Something went wrong</h1>;
  }

  const {
    paginatedDecksQuery: {
      decksConnection: { edges },
      fetchMore
    }
  } = props;

  // console.log("allDecks = ", allDecks, "\n");
  const { truncate } = utils;

  const cursor = edges[edges.length - 1].node.id;

  console.log("cursor = ", cursor, "\n");

  return (
    <div style={{ marginRight: 10 }}>
      <h2>Hello Paginated Decks</h2>

      <Button
        color="secondary"
        onClick={() => {
          fetchMore({
            // note this is a different query than the one used in the
            // Query component
            query: PAGINATED_DECKS_QUERY,
            variables: {
              first: 2,
              after: cursor
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {

              return {
                decksConnection: {
                  __typename: "DeckConnection",
                  pageInfo: fetchMoreResult.decksConnection.pageInfo,
                  edges: [
                    ...previousResult.decksConnection.edges,
                    ...fetchMoreResult.decksConnection.edges
                  ],
                  aggregate: previousResult.decksConnection.aggregate
                }
              };
            }
          });
        }}
      >
        Fetch More
      </Button>

      <List dense={false}>
        {edges.map(d => {
          const { deckName, deckDetails, score, id } = d.node;
          return (
            <div key={id}>
              <ListItem
                onClick={() => {
                  viewDeck(id);
                }}
              >
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText
                  primary={deckName}
                  secondary={truncate(deckDetails)}
                />
                <ListItemText primary="Score" secondary={score} />
              </ListItem>
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default compose(
  withRouter,
  graphql(PAGINATED_DECKS_QUERY, {
    name: "paginatedDecksQuery",
    options: props => {
      console.log("hello paginatedDecksQuery options = ", props, "\n");
      return {
        variables: {
          first: 2,
          after: "cjsqv1xb910920b70awpignxk"
        }
        // pollInterval: 15000,
      };
    }
  })
)(PaginatedDecks);


// console.log("thing = ", thing, "\n");
// const { fetchMoreResult } = thing;
// console.log("previousResult = ", previousResult, "\n");
// console.log("fetchMoreResult = ", fetchMoreResult, "\n");
// console.log(
//   "previousResult.decksConnection.edges = ",
//   previousResult.decksConnection.edges,
//   "\n"
// );
// console.log(
//   "fetchMoreResult.decksConnection.edges = ",
//   fetchMoreResult.decksConnection.edges,
//   "\n"
// );
