const { City, Park, User } = require("../models");

const resolvers = {
  Query: {
    hello: () => "hello",
  },
};
module.exports = resolvers;
