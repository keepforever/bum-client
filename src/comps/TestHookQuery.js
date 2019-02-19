import React from 'react';
import { useQuery } from "react-apollo-hooks";
import ME_QUERY from '../graphql/q/ME_QUERY';


export default  ( props ) => {
  const { data } = useQuery(ME_QUERY, {suspend: true})

  console.log('data = ', data, '\n' )

  console.log('!!data = ', !!data, '\n' )

  return (
    <h1>Hello TestHookQuery</h1>
  )
};
