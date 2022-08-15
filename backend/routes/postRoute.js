const express = require('express')
const router = express.Router()
const {
    getPosts,
    addPost
  } = require('../controllers/postController')


  
router.route('/').get(getPosts).post(addPost)


module.exports = router