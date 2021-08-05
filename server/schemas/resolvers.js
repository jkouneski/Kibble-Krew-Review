const { AuthenticationError } = require('apollo-server-express');
const { City, Park, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  // find all cities
  Query: {
    cities: async () => {
      return City.find();
    },
    city: async (parent, { args }) => {
      const data = await City.findOne({ _id: cityId });
      const park = await Park.find({ location: data.name });
      console.log(park);
      return park;
    },
    parks: async () => {
      return Park.find();
    },
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user){
        throw new AuthenticationError('User not found')
      }
      const correctPw = await user.isCorrectPassword(password)
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },
      
    },
    // addReview: async (parent, {userId: ID, review}) => {
    //   return User.findByIdAndUpdate( { _id: profileId },
    //     {
    //       $addToSet: { reviews: review },
    //     },
    //     {
    //       new: true,
    //       runValidators: true,
    //     })
    // }
};

module.exports = resolvers;
