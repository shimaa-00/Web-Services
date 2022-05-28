import express from "express";
import {
  create_comment,
  get_comment,
  get_all_comments,
  update_comment,
  delete_comment,
} from "../controllers/CommentController";

const router = express.Router();

router.post("/:user_id/:article_id", create_comment);
router.get("/find/:id", get_comment);
router.get("/:user_id/", get_all_comments);
router.put("/:id", update_comment);
router.delete("/:id/:article_id", delete_comment);

export default router;
