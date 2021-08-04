const { Schema, model } = require("mongoose");
const Park = require("./Park");

const citySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  parks: [{ type: Schema.Types.ObjectId, ref: Park }],
});

const City = model("City", citySchema);

module.exports = City;
