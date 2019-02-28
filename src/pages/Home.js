import React, { Component } from "react";
// Apollo
import { graphql, compose } from "react-apollo";
import ME_QUERY from "../graphql/q/ME_QUERY";
// Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAuthFalse } from "../store/actions/auth";
// styled
import { Container } from '../styled/home'
// comps
import AddDeck from '../comps/AddDeck';
import DeckList from '../comps/DeckList';


class Home extends Component {
  render() {
    // console.log('Home.js, this.props = ', this.props, '\n' )
    const {
      meQuery: { loading },
      setAuthFalseAction
    } = this.props;

    console.log("loading = ", loading, "\n");

    if (loading) return <h1>Loading...</h1>;

    console.log('this.props.meQuery.me = ', this.props.meQuery.me, '\n' )
    if(!this.props.meQuery.me){
      return <h1>Please Login</h1>
    }

    const { meQuery: { me: { name, email, decks }} } = this.props

    console.log("this.props = ", this.props, "\n");
    return (
      <Container >
        <div style={{marginLeft: '50px'}}>
        <h1 >Hello Home Page</h1>
        <h3>name: {name}</h3>
        <h3>email: {email}</h3>
        <h3>decks: {decks.length}</h3>
        <button
          style={{ width: "300px", height: "65px", fontSize: "32px" }}
          onClick={() => {
            setAuthFalseAction();
          }}
        >
          Logout
        </button>
        <DeckList decks={decks}/>
        </div>
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
      name: "meQuery"
    })
  )(Home)
);
