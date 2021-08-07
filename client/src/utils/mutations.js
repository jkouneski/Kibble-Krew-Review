import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($parkId: ID!, $review: String!) {
    addReview(parkId: $parkId, review: $review) {
      _id
      name
      reviews
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($review: String!) {
    removeReview(review: $review) {
      _id
      name
      reviews
    }
  }
`;
