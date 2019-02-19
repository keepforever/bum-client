import gql from "graphql-tag";
import USER_FRAGMENT from '../f/USER_FRAGMENT';

export default gql`
  mutation (
    $name: String!,
    $email: String!,
    $password: String!
    $isSeller: Boolean!
  ) {
    userSignup(
      name: $name,
      email: $email,
      password: $password,
      isSeller: $isSeller
    ) {
        token
        user {
          ...UserInfo
        }
    }
  }
  ${USER_FRAGMENT}
`;
