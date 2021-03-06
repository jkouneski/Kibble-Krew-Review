const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type City {
    name: String
  }

  type Park {
    _id: ID
    name: String
    parkLocation: String
    address: String
    reviews: [String]!
    leash: Boolean
    image: String
  }

  type Query {
    parks: [Park]
    cities: [City]
    city(name: String): [Park]
    park(location: String): Park
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile

    addReview(parkId: ID!, review: String!): Park
    removeReview(review: String!): Park
  }
`;

module.exports = typeDefs;
