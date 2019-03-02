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
import { Container, RowContainer, Button, CommunityDecksContainer } from "../styled/home";
// comps
import MeDeckList from "../comps/MeDeckList";
import CommunityDecks from "../comps/CommunityDecks";
import Placard from "../comps/Placard"

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
      meQuery: {
        me
      }
    } = this.props;

    console.log("Home.js, \n this.props = ", this.props, "\n");
    return (
      <Container>
        <div style={{ marginLeft: "50px" }}>
          <RowContainer>
            <Placard {...me}/>
            {/* <h3>name: {name}</h3>
            <h3>email: {email}</h3>
            <h3>number of decks: {decks.length}</h3> */}
          </RowContainer>

          <CommunityDecksContainer>
            <CommunityDecks />
          </CommunityDecksContainer>
          {/*<MeDeckList decks={decks}/> */}
        </div>
        <Button
          color="black"
          onClick={() => {
            setAuthFalseAction();
          }}
        >
          Log out
        </Button>
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
      // options: {
      //   pollInterval: "5000"
      // }
    })
  )(Home)
);
