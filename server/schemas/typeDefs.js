const { ggl } = require("apollo-server-express");

const typeDefs = ggl`
type City {
    _id: ID!
    name: String!
}
type Park {
    _id: ID!
    name: String!
    park_size: String!
    review: String!
    poop_bags: Boolean!
    has_fence: Boolean!
    leash_required: Boolean!
    is_supervised: Boolean!
    cityId: ID!
    userID: ID!

}
type User {
    _id: ID!
    user_name: String!
    password: String!
}
type Query {
    city: [City]
    parks(_id: String!): [Park]
}
type Mutation {

}`;

module.exports = typeDefs;
