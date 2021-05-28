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
};
