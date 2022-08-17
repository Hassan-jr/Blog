const Post = require("../models/postSchema");

// get all posts
const getPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  if (!posts) {
    res.status(400);
    throw new Error("Posts not found");
  }
  res.status(200).json(posts);
};

// add post or create  post
const addPost = async (req, res) => {
  const val = req.body;
  const post = await Post.create(val);
};

const devPost = async (req, res) => {
  const data = await Post.find({ category: "dev" }).sort({ createdAt: -1 });
  if (!data) {
    res.status(400);
    throw new Error("Post not found");
  }
  res.status(200).json(data);
};

const techPost = async (req, res) => {
  const data = await Post.find({ category: "tech" }).sort({ createdAt: -1 });
  if (!data) {
    res.status(400);
    throw new Error("Post not found");
  }
  res.status(200).json(data);
};

const blockchainPost = async (req, res) => {
  const data = await Post.find({ category: "blockchain" }).sort({
    createdAt: -1,
  });
  if (!data) {
    res.status(400);
    throw new Error("Post not found");
  }

  res.status(200).json(data);
};

const financePost = async (req, res) => {
  const data = await Post.find({ category: "finance" }).sort({ createdAt: -1 });
  if (!data) {
    res.status(400);
    throw new Error("Post not found");
  }
  res.status(200).json(data);
};

const onePost = async (req, res) => {
  const id = req.params.id;
  const  data = await Post.findById(id)
  res.status(200).json(data)
};

module.exports = {
  getPosts,
  addPost,
  devPost,
  financePost,
  blockchainPost,
  techPost,
  onePost,
};
