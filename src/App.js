import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { BrowserRouter } from "react-router-dom";
// redux
import { createStore } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import rootReducer from './store/reducers';
// locals
import apolloClient from "./config/apolloClient";
import Routes from "./config/Routes";
import Layout from "./layout/Layout";


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const MyLayout = () => {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <ApolloProvider client={apolloClient}>
          <ApolloProviderHooks client={apolloClient}>
            <BrowserRouter>
              <MyLayout />
            </BrowserRouter>
          </ApolloProviderHooks>
        </ApolloProvider>
      </ReduxProvider>
    );
  }
}

export default App;
