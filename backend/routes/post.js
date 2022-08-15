const express = require('express')
const router = express.Router()
const {
    getPosts
  } = require('../controllers/postController')


  
router.route('/dev').get(getPosts)


module.exports = router