const db = require('../config/connection');
const { Profile, City, Park } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const parkDataSeeds = require("./parkData.json")
const cityDataSeeds = require("./cityData.json")

// City.deleteMany({})
// .then(() => City.collection.insertMany)

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);

    await City.deleteMany({});
    await City.create(cityDataSeeds);

    await Park.deleteMany({});
    await Park.create(parkDataSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
