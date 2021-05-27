const Post = require("../models/Post");
// const clientJS = require("../public/clientJS/client");

module.exports = {
  getAirport: async (req, res) => {
    const airportCode = req.body;
    // console.log(airportCode);
    try {
      console.log(airportCode, "hello controller");
      const posts = await Post.find({
        airportId: req.body.airportId,
      });
      res.render("feed.ejs", { posts: posts });
      console.log(posts);
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
