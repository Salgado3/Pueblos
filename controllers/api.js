const Post = require("../models/Post");


module.exports = {
  getAirport: async (req, res) => {

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
   
    try {
      
      const posts = await Post.find({
        airportId: req.body.formAirCodesMap,
      });
      res.render("feed.ejs", { posts: posts });
    
    } catch (err) {
      console.log(err);
    }
  },
};
