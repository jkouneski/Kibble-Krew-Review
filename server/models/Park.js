const { Schema, model } = require('mongoose');

const parkSchema = new Schema({
  parkName: {
    type: String,
    required: true,
  },
  parkLocation: {
    type: String,
    required: true,
  },
  reviews: [
    {
      type: String,
      trim: true,
    },
  ],
  address: {
    type: String
  },
  leash: {
    type: Boolean,
  },
  image: {
    type: String
  },

});

const Park = model('Park', parkSchema);

module.exports = Park;