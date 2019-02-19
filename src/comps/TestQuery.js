import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import ME_QUERY from '../graphql/q/ME_QUERY';


class TestQuery extends Component {

  render () {
    // console.log('this.props = ', this.props, '\n' )
    return (
      <h1>Hello TestQuery</h1>
    );
  }
}



export default compose(
  graphql(ME_QUERY, {
    name: "meQuery"
  }),
)(TestQuery);
