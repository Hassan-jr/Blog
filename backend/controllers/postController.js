const Post = require("../models/postSchema");

// get add posts
const getPosts = async (req, res) => {
    const posts = await Post.find()

    res.status(200).json(posts) 
 
};

// add post or create  post
const addPost = async (req, res) => {
    const val = req.body
    const post = await Post.create(val)
    console.log(post);
}



module.exports = {
  getPosts,
  addPost,
};
