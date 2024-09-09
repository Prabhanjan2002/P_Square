import express from "express";
import {
  createPost,
  getPost,
  deletePost,
  likeUnLikePost,
  replyToPost,
  getFeedPosts,
} from "../controllers/postController.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();

router.get("/feed", protectRoute, getFeedPosts);
router.get("/:id", getPost); ///here teh /:id is the postid
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.put("/like/:id", protectRoute, likeUnLikePost);
router.put("/reply/:id", protectRoute, replyToPost);

export default router;
