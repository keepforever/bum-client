import React from "react";
import { compose } from "react-apollo";
// material-ui
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FolderIcon from "@material-ui/icons/Folder";
import Divider from "@material-ui/core/Divider";
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
    <div>
      <List dense={false}>
        {decks.map(d => {
          console.log("MeDecksNew.js, d = ", d, "\n");
          const { deckName, deckDetails, score, id } = d;
          return (
            <div key={id}>
              <ListItem
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
              <Divider />
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default compose(withRouter)(MeDecks);
