const express = require("express");
const router = express.Router();
const {
  getPosts,
  addPost,
  devPost,
  financePost,
  blockchainPost,
  techPost,
  specificPost
} = require("../controllers/postController");

// home route
router.route("/").get(getPosts).post(addPost);
// specific home route
router.route("/:id").get(specificPost)
// dev route
router.route("/dev").get(devPost);
// tech route
router.route("/tech").get(techPost);
// finance rote
router.route("/finance").get(financePost);
// blockchain route
router.route("/blockchain").get(blockchainPost);

module.exports = router;
