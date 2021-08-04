const jwt = require("jsonwebtoken");
const secret = "igotasecret";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // token is sent by body, header or tokens
    let token = req.body.token || req.query.token || req.headers.authorization;
    // split token string and return actual token
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }
    // if token is verified, add decoded user data to the request so it could be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }
    // new comment
    // pass request object as context in the resolvers
    return req;
  },
  signToken: function ({ username, password, _id }) {
    const payload = { username, password, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
