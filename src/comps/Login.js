import React, { useState } from 'react';
import { useMutation } from "react-apollo-hooks";
import LOGIN_MUTATION from '../graphql/m/LOGIN_MUTATION';


export default  ( props ) => {

  const [values, setValues] = useState({
    email: 'a',
    password: 'a',
  })

  const { email, password } = values;

  console.log('values = ', values, '\n' )

  const loginMutation = useMutation(LOGIN_MUTATION, {
    variables: {
      ...values,
    },
    update: (proxy, result) => {
      console.log('proxy = ', proxy, '\n' )
      console.log('result = ', result, '\n' )
    },
    suspend: true
  });

  return (
    <div style={{ width: 500, display: 'flex', flexDirection: 'column'}}>
    <input
      onChange={e => {
        const email = e.target.value;
        setValues({
          ...values,
          email
        });
      }}
      value={email}
    />

    <input
      onChange={e => {
        const password = e.target.value;
        setValues({
          ...values,
          password
        });
      }}
      value={password}
    />
    <button onClick={() => loginMutation()}> LOGIN </button>
    </div>

  )
};
