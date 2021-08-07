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
  review: {
    type: String
  },
  address: {
    type: String
  },
  // parkId: {
  //   type: Number,
  //   min: 0,
  //   required: true,
  //   unique: true,
  // },
  parkSize: {
    type: String,
  },
  comment: {
    type: String,
  },
  poopBags: {
    type: Boolean,
  },
  hasFence: {
    type: Boolean,
  },
  isClean: {
    type: Boolean,
  },
  isSupervised: {
    type: Boolean,
  },
  leash: {
    type: Boolean,
  },

});

const Park = model('Park', parkSchema);

module.exports = Park;