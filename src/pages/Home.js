import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// Apollo
import { graphql, compose } from "react-apollo";
import ME_QUERY from "../graphql/q/ME_QUERY";
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthFalse } from "../store/actions/auth";
// styled
import {
  Container,
  RowContainer,
  Button,
  DeckListContainer
} from "../styled/home";
// comps
import MeDecksNew from "../comps/MeDecksNew";
import CommunityDecks from "../comps/CommunityDecks";
import Placard from "../comps/Placard";
// material ui
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Home extends Component {
  render() {
    // console.log('Home.js, this.props = ', this.props, '\n' )
    const {
      meQuery: { loading },
      setAuthFalseAction
    } = this.props;

    // console.log("Home.js, loading = ", loading, "\n");
    if (loading) return <h1>Loading...</h1>;

    // console.log('this.props.meQuery.me = ', this.props.meQuery.me, '\n' )
    if (!this.props.meQuery.me) {
      return <Redirect to="/auth" />;
    }

    const {
      meQuery: { me }
    } = this.props;

    console.log("Home.js, \n this.props = ", this.props, "\n");

    return (
      <Container>
        <div style={{ marginLeft: "50px" }}>
          <Placard {...me} />
          <RowContainer>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" component="h3">
                Community Decks
              </Typography>
              <Divider />
              <br/>
              <DeckListContainer>
                <CommunityDecks />
              </DeckListContainer>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" component="h3">
                Your Decks
              </Typography>
              <Divider />
              <br/>
              <DeckListContainer>
                <MeDecksNew decks={me.decks} name={me.name} />
              </DeckListContainer>
            </div>
          </RowContainer>
        </div>
        {/* <Button
          color="black"
          onClick={() => {
            setAuthFalseAction();
            this.props.history.push("./auth")
          }}
        >
          Log out
        </Button> */}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setAuthFalseAction: setAuthFalse
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(
  compose(
    graphql(ME_QUERY, {
      name: "meQuery",
      options: {
        pollInterval: 5000
      }
    })
  )(Home)
);
