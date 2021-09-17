const Post = require("../models/Post");


module.exports = {
  getAirport: async (req, res) => {
    const airportCode = req.body;
    // console.log(airportCode);
    try {
      
      const posts = await Post.find({
        airportId: req.body.airportId,
      });
      res.render("feed.ejs", { posts: posts });
      
    } catch (err) {
      console.log(err);
    }
  },

  getAirportMap: async (req, res) => {
   
    // console.log(airportCode);
    try {
      console.log("Map api controller working", req.body);
      const posts = await Post.find({
        airportId: req.body.formAirCodesMap,
      });
      res.render("feed.ejs", { posts: posts });
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  },
};
