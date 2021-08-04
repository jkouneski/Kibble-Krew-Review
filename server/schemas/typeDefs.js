const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type City {
    name: String
  }

  type Park {
    parkName: String
    parkLocation: String
    address: String
    review: String
    leash: Boolean
  }

  type Query {
    parks: [Park]
    cities: [City]
    city(name: String): [Park]
    park(location: String): Park
    users: [User]!
    user(userId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(userId: ID!, skill: String!): User
    removeUser: User
    removeSkill(skill: String!): User
  }
`;

module.exports = typeDefs;
