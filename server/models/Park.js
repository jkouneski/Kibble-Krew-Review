const { Schema, model } = require('mongoose');

const parkSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  leash: {
    type: Boolean,
  },
  review: {
    type: String,
  }

});

const Park = model('Park', parkSchema);

module.exports = Park;