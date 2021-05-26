const Post = require("../models/Post");
// const airportCode = require("../public/clientJS/client");

module.exports = {
  getAirport: async (req, res) => {
    try {
      console.log(req.body.name);
    } catch (err) {
      console.log(err);
    }
  },

  //   airportCodes: async (req, res) => {
  // //     //parce out the airport image URL and Title, then res.json() send back data in a format that is good to work with.
  // //     try {
  // //       const postsById = await Post.find(req.query.airportId);

  // //       res.render("feed.ejs", {
  // //         postsById: postsById,
  // //         image__img: req.airportId,
  // //       });
  // //       console.log(data);
  // //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
};
