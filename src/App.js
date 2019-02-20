import React, { Component, Suspense } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import apolloClient from "./apolloClient";
import {BrowserRouter} from 'react-router-dom';

import Routes from './config/Routes'
import Layout from './comps/layout/Layout'
// import Login from "./comps/Login";
// import TestQuery from "./comps/TestQuery";
// import TestHookQuery from "./comps/TestHookQuery";

const MyLayout = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}


class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ApolloProviderHooks client={apolloClient}>
          <BrowserRouter>
            <MyLayout />
          </BrowserRouter>
        </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;
