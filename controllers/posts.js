const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ _id: req.user.bookmark });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find({
        airportId: req.body.airportId,
      });
      res.render("feed.ejs", { posts: posts });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
 
  likePost: async (req, res) => {
    try {
      await User.findOneAndUpdate(
        { _id: req.user.id },

        { $addToSet: { bookmark: req.params.id } }
      );
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      await User.findOneAndUpdate(
        { _id: req.user.id },

        { $pull: { bookmark: req.params.id } }
      );
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};

// // Find post by id
// let post = await Post.findById({ _id: req.params.id });
// // Delete image from cloudinary
// await cloudinary.uploader.destroy(post.cloudinaryId);
// // Delete post from db
// await Post.remove({ _id: req.params.id });
