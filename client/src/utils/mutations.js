import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($userId: ID!, $review: String!) {
    addReview(userId: $userId, review: $review) {
      _id
      username
      reviews
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(name: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($review: String!) {
    removeReview(review: $review) {
      _id
      username
      reviews
    }
  }
`;
