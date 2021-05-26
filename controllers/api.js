const Post = require("../models/Post");

module.exports = {
  airportCodes: async (req, res) => {
    const post = await Post.findById(req.query.airportCode);

    //parce out the airport image URL and Title, then res.json() send back data in a format that is good to work with.
  },
};
