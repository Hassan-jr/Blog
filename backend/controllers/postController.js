const Post = require("../models/postSchema");

// get all posts
const getPosts = async (req, res) => {
    const posts = await Post.find()
    if (!posts) {
      res.status(400)
      throw new Error('Posts not found')
    }
    res.status(200).json(posts) 
 
};

// add post or create  post
const addPost = async (req, res) => {
    const val = req.body
    const post = await Post.create(val)
    
}

const devPost = async (req, res) => {
  const data = await Post.find({category : "dev"})
  if (!data) {
    res.status(400)
    throw new Error('Post not found')
  }
  res.status(200).json(data) 
}

const techPost = async (req, res) => {
  const data = await Post.find({category : "tech"})
  if (!data) {
    res.status(400)
    throw new Error('Post not found')
  }
  res.status(200).json(data) 
}

const blockchainPost = async (req, res) => {
  const data = await Post.find({category : "blockchain"})
  if (!data) {
    res.status(400)
    throw new Error('Post not found')
  }
  res.status(200).json(data) 
}

const financePost = async (req, res) => {
  const data = await Post.find({category : "finance"})
  if (!data) {
    res.status(400)
    throw new Error('Post not found')
  }
  res.status(200).json(data) 
}

const specificPost = async (req, res) => {
  id = req.params.id
  const data = await Post.find({_id : id})
  if (!data) {
    res.status(400)
    throw new Error('Post not found')
  }
  res.status(200).json(data) 
}



module.exports = {
  getPosts,
  addPost,
  devPost,
  financePost,
  blockchainPost,
  techPost,
  specificPost
};
