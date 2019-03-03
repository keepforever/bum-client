import React from "react";
import { graphql, compose } from "react-apollo";
import ALL_DECKS_QUERY from "../graphql/q/ALL_DECKS_QUERY";
// material-ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
// import Typography from '@material-ui/core/Typography';
import FolderIcon from "@material-ui/icons/Folder";
// utils
import utils from "../utils";
// router
import { withRouter } from "react-router";

function MeDecks(props) {
  console.log("MeDecks.js, props = ", props, "\n");
  const { decks = [], name } = props;
  const { truncate } = utils;

  const viewDeck = (id, deck) => {
    props.history.push(`/view-deck/${id}`, {
      ...deck,
      author: {
        name
      },
      deckList: JSON.parse(deck.deckList)
    });
  };


  return (
    <div style={{border: "1px solid red"}}>
    <Typography variant="h5" component="h3">
      Your Decks
    </Typography>
      <List dense={false}>
        {decks.map(d => {
          console.log('MeDecksNew.js, d = ', d, '\n' )
          const { deckName, deckDetails, score, id } = d;
          return (
            <ListItem
              key={id}
              onClick={() => {
                viewDeck(id, d);
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
          );
        })}
      </List>
    </div>
  );
}

export default compose(
  withRouter,
)(MeDecks);
