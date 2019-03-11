import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";

const cache = new InMemoryCache();

const tempMeToken = "nope";

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
    );
  }

  if (networkError) {
    console.log(
      `[Network error ${operation.operationName}]: ${networkError.message}`
    );
  }
});

const authLink = setContext((_, { headers }) => {
  const myToken = sessionStorage.getItem("bumtoken") || tempMeToken;

  const context = {
    headers: {
      ...headers,
      authorization: `Bearer ${myToken}`
    }
  };
  return context;
});

const httpLink = new HttpLink({ uri: "https://prisma-feb-2019-azzfdmsxgy.now.sh" });

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache
});

export default client;

// const notMalformed = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanM2bGlmNDgwMDA5MGE1OHI1eXZ6andrIiwiZXhwaXJlc0luIjoiN2QiLCJpYXQiOjE1NTAyNjk4ODZ9.ydtyT1hUdpKdiveq1bh3Ma2odJOgR7LB6cevp2fh4eI"
// const sessionToken = sessionStorage.getItem("bumtoken");
//
// if(sessionToken && sessionStorage.getItem("bumtoken").length > 10) {
//   console.log('apolloClient.js, hi reset = ', '\n' )
//   sessionStorage.setItem("bumtoken", notMalformed)
// };
