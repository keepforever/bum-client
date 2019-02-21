import React, { useState, Suspense } from "react";
import { useMutation } from "react-apollo-hooks";
import LOGIN_MUTATION from "../graphql/m/LOGIN_MUTATION";
import ME_QUERY from "../graphql/q/ME_QUERY";

export default props => {
  const setToken = token => {
    sessionStorage.setItem("bumtoken", token);
  };

  const [values, setValues] = useState({
    email: "b",
    password: "b"
  });

  const { email, password } = values;

  const loginMutation = useMutation(LOGIN_MUTATION, {
    variables: {
      ...values
    },
    update: async (proxy, result) => {
      const loginToken = await result.data.login.payload.token;
      if (loginToken) {
        setToken(loginToken);
      }
      // nav home after successful login
      props.history.push("/home");
    }
  });

  return (
    <div style={{ width: 500, display: "flex", flexDirection: "column" }}>
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
  );
};
