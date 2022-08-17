const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  devPost,
  financePost,
  blockchainPost,
  techPost,
  onePost
} = require("../controllers/postController");

// home route
router.route("/").get(getPosts).post(addPost);

// dev route
router.route("/dev").get(devPost);
// tech route
router.route("/tech").get(techPost);
// finance rote
router.route("/finance").get(financePost);
// blockchain route
router.route("/blockchain").get(blockchainPost);

// specific home route
router.route("/article/:id").get(onePost)

module.exports = router;
