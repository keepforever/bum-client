import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import ME_QUERY from '../graphql/q/ME_QUERY';

class Home extends Component {

  render () {
    // console.log('Home.js, this.props = ', this.props, '\n' )
    const { meQuery: { loading } } = this.props

    console.log('loading = ', loading, '\n' )

    if(loading) return <h1>Loading...</h1>
    return (
      <div>
        <h1>
          Hello Home Page
        </h1>
      </div>
    );
  }
}

export default compose(
  graphql(ME_QUERY, {
    name: "meQuery"
  }),
)(Home);
