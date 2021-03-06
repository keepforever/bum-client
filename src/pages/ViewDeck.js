import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
// graphql
import SINGLE_DECK_QUERY from "../graphql/q/SINGLE_DECK_QUERY";
import VOTE_ON_DECK_MUTATION from "../graphql/m/VOTE_ON_DECK_MUTATION";
// material ui
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownSharp from "@material-ui/icons/ThumbDownSharp";
import ThumbUpSharp from "@material-ui/icons/ThumbUpSharp";
// locals
import { Row } from "../styled/viewDeck";
import Card from "../comps/Card";
// copy to clipboard util
import { CopyToClipboard } from "react-copy-to-clipboard";

const styles = theme => ({
  typo: {
    margin: "10px 10px",
    fontSize: 50,
    color: "red"
  },
  visitUserButton: {
    margin: "40px 10px",
    fontSize: 50,
    color: "white",
    background: "black"
  },
  para: {
    fontSize: 30
  },
  likeButtons: {
    fontSize: 50
  }
});

function ViewDeck(props) {
  console.log("ViewDeck.js, props` = ", props, "\n");

  const viewUserProfile = id => {
    props.history.push(`/view-user/${id}`, {
      id
    });
  };

  const castVote = async (id, quality) => {
    const { voteOnDeckMutation } = props;
    let response;
    try {
      response = await voteOnDeckMutation({
        variables: {
          deckId: id,
          quality
        }
      });
    } catch (e) {
      console.log("Dislike catch block = ", e, "\n");
    }

    // console.log("castVote response = ", response, "\n");
  };

  const { loading } = props.singleDeckQuery;

  if (loading) {
    return <h1>LOADING... </h1>;
  }

  const {
    deckName,
    deckDetails,
    deckList,
    score,
    id,
    raw,
    author: { name, id: deckAuthorId }
  } = props.singleDeckQuery.singleDeck;

  const { classes } = props;

  const parsedDecklist = JSON.parse(deckList);

  const cardNames = Object.keys(parsedDecklist);

  return (
    <div>
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Typography className={classes.typo}>{`"${deckName}"`}</Typography>
        <Typography className={classes.typo}>by</Typography>
        <Button
          color="secondary"
          onClick={() => {
            viewUserProfile(deckAuthorId);
          }}
          className={classes.visitUserButton}
        >
          {name}
        </Button>
        <Typography className={classes.typo}>{`Score: ${score}`}</Typography>
        <Row>
          <IconButton
            aria-label="Down Vote Deck"
            onClick={() => {
              castVote(id, false);
            }}
          >
            <ThumbDownSharp style={{ fontSize: 50 }} />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => {
              castVote(id, true);
            }}
          >
            <ThumbUpSharp style={{ fontSize: 50 }} />
          </IconButton>
        </Row>
      </Row>
      <div
        style={{ border: "2px solid white", padding: 15, margin: "40px 0px" }}
      >
        <Typography className={classes.para}>{`${deckDetails}`}</Typography>
      </div>
      {raw && (
        <CopyToClipboard
          onCopy={() => alert(`Copied ${deckName}!`)} text={raw}
        >
          <Button color="secondary" variant="contained">
            Copy to Arena
          </Button>
        </CopyToClipboard>
      )}
      <br />
      <Row>
        {cardNames.map(c => {
          if (parsedDecklist[c].isSplitCard) {
            const firstHalf = Object.keys(parsedDecklist[c])[2];
            console.log("firstHalf = ", firstHalf, "\n");
            return (
              <Card
                key={parsedDecklist[c][firstHalf].name}
                {...parsedDecklist[c][firstHalf]}
                quantity={parsedDecklist[c].quantity}
              />
            );
          } else {
            return <Card key={parsedDecklist[c].name} {...parsedDecklist[c]} />;
          }
        })}
      </Row>
    </div>
  );
}

ViewDeck.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isAuth
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps),
  graphql(SINGLE_DECK_QUERY, {
    name: "singleDeckQuery",
    options: props => {
      console.log("hello options = ", props, "\n");
      return {
        pollInterval: 15000,
        variables: {
          deckId: props.location.state.id
        }
      };
    }
  }),
  graphql(VOTE_ON_DECK_MUTATION, {
    name: "voteOnDeckMutation"
  })
)(ViewDeck);
