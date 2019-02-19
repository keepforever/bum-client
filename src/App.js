import React, { Component, Suspense } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import apolloClient from "./apolloClient";

import Login from "./comps/Login";
import TestQuery from "./comps/TestQuery";
import TestHookQuery from "./comps/TestHookQuery";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ApolloProviderHooks client={apolloClient}>
          <Suspense fallback={<h1>Suspense loading...</h1>}>
            <TestHookQuery />
          </Suspense>

          <Suspense fallback={<h1>Suspense loading...</h1>}>
            <Login />
          </Suspense>
        </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;
