import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
// graphql
import SINGLE_DECK_QUERY from "../graphql/q/SINGLE_DECK_QUERY";
// material ui
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownSharp from "@material-ui/icons/ThumbDownSharp";
import ThumbUpSharp from "@material-ui/icons/ThumbUpSharp";
// locals
import { Row } from "../styled/viewDeck";
import Card from "../comps/Card";

const styles = theme => ({
  typo: {
    margin: "40px 0",
    fontSize: 50,
    color: "red"
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

  // const {
  //   deckName,
  //   deckDetails,
  //   deckList,
  //   score,
  //   id,
  //   author: { name }
  // } = props.location.state;

  const { loading } =  props.singleDeckQuery;

  if(loading) {
    return <h1>LOADING... </h1>
  }

  const {
    deckName,
    deckDetails,
    deckList,
    score,
    id,
    author: { name }
  } = props.singleDeckQuery.singleDeck;

  const { classes } = props;

  const parsedDecklist = JSON.parse(deckList);

  const cardNames = Object.keys(parsedDecklist);

  return (
    <div>
      <Typography className={classes.typo}>
        {`"${deckName}" by ${name}`}
      </Typography>
      <Typography className={classes.typo}>{`Score: ${score}`}</Typography>
      <div
        style={{ border: "2px solid white", padding: 15, margin: "40px 0px" }}
      >
        <Typography className={classes.para}>{`${deckDetails}`}</Typography>
      </div>
      <br />
      <Row>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            console.log("DisLike = ", id, "\n");
          }}
        >
          <ThumbDownSharp style={{ fontSize: 50 }} />
        </IconButton>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            console.log("like = ", id, "\n");
          }}
        >
          <ThumbUpSharp style={{ fontSize: 50 }} />
        </IconButton>
      </Row>

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
  })
)(ViewDeck);
