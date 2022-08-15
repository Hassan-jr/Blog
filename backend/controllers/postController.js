const Post = require("../models/postSchema");

const getPosts = async (req, res) => {
    const posts = await Post.find()

    res.status(200).json(posts[1]) 
 
};

const addPost = async (req, res) => {
    const val = req.body

    const post = await Post.create(val)
    console.log('====================================');
    console.log(post);
    console.log('====================================');
}



module.exports = {
  getPosts,
  addPost,
};
