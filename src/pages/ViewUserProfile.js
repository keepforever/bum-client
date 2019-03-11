import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import { connect } from "react-redux";
// graphql
import SINGLE_USER_QUERY from "../graphql/q/SINGLE_USER_QUERY";
import VOTE_ON_DECK_MUTATION from "../graphql/m/VOTE_ON_DECK_MUTATION";
// material ui
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// locals
import { Row } from "../styled/viewDeck";

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

function UserProfile(props) {
  console.log("UserProfile.js, props` = ", props, "\n");

  const { loading } = props.singleUserQuery;

  if (loading) {
    return <h1>LOADING... </h1>;
  }

  const {
    decks,
    email,
    name,
    id,
  } = props.singleUserQuery.singleUser;

  // const { classes } = props;


  return (
    <div style={{color: 'cornsilk', display: 'flex', flexDirection: 'column'}}>
      <h2>Viewing {name}'s profile</h2>
      <h2>{`${name} has ${decks.length} decks`}</h2>
      <h2>{`${name}s id: ${id}`}</h2>
    </div>
  );
}

UserProfile.propTypes = {
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
  graphql(SINGLE_USER_QUERY, {
    name: "singleUserQuery",
    options: props => {
      console.log("ViewUserProfile, graphql() options = ", props, "\n");
      return {
        pollInterval: 15000,
        variables: {
          userId: props.location.state.id
        }
      };
    }
  }),
  graphql(VOTE_ON_DECK_MUTATION, {
    name: "voteOnDeckMutation"
  })
)(UserProfile);
