import React, { Component, Suspense } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { BrowserRouter } from 'react-router-dom';
// locals
import apolloClient from "./config/apolloClient";
import Routes from './config/Routes'
import Layout from './comps/layout/Layout'


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
