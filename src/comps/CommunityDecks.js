import React from "react";
import { graphql, compose } from "react-apollo";
import ALL_DECKS_QUERY from "../graphql/q/ALL_DECKS_QUERY";
// material-ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Typography from '@material-ui/core/Typography';
import FolderIcon from "@material-ui/icons/Folder";

function CommunityDecks(props) {
  console.log("CommunityDecks, props = ", props, "\n");

  const {
    allDecksQuery: { loading }
  } = props;

  if (loading) return <h1>Loading...</h1>;

  if (!props.allDecksQuery.allDecks) {
    return <h1>Something went wrong</h1>;
  }

  const {
    allDecksQuery: { allDecks }
  } = props;

  console.log("allDecks = ", allDecks, "\n");
  return (
    <>
      <h1>Hello CommunityDecks</h1>
      <List dense={false}>
        {allDecks.map(d => {
          const { deckName, deckDetails, score, id } = d;
          return (
            <ListItem key={id}>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary={deckName} secondary={deckDetails} />
              <ListItemText primary="Score" secondary={score} />
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default compose(
  graphql(ALL_DECKS_QUERY, {
    name: "allDecksQuery"
  })
)(CommunityDecks);
