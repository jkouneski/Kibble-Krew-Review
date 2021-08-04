const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type City {
    _id: ID
    name: String
    parks: [Park]
  }

  type Auth {
    token: ID!
    user: User
  }
  type Park {
    _id: ID
    name: String
    location: String
    address: String
    leash: Boolean
    review: String
  }
  type User {
    _id: ID
    username: String
    password: String
  }
  type Query {
    parks: [Park]
    cities: [City]
    city(name: String): [Park]
    park(location: String): Park
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, password: String!): User
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

// add to Mutation later
// addReview(userID: ID!, review): User
