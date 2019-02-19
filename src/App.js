import React, { Component, Suspense } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import apolloClient from "./apolloClient";
import {BrowserRouter} from 'react-router-dom';

import Routes from './config/Routes'
// import Login from "./comps/Login";
// import TestQuery from "./comps/TestQuery";
// import TestHookQuery from "./comps/TestHookQuery";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ApolloProviderHooks client={apolloClient}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;
