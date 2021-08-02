// seed data here
const db = require("../config/connection");
const { City, Park, User } = require("../models");

const cityData = require("./cityData.json");
const parkData = require("./parkData.json");
const userDate = require("./userData.json");

db.once("open", async () => {
  // clean database
  await City.deleteMany({});
  await Park.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  const cities = await City.insertMany(cityData);
  const parks = await Park.insertMany(parkData);
  const users = await User.insertMany(userData);

  console.log("all done!");
  process.exit(0);
});
