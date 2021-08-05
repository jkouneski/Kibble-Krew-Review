import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      username
      reviews
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      reviews
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      reviews
    }
  }
`;
// city query
export const GET_PARKS_CITYNAME = gql`
  query getCity($name: String) {
    city(name: $name) {
      parkName
      parkLocation
      address
      leash
      review
    }
  }
`;
