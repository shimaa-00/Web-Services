import express from "express";
import {
  create_article,
  get_article,
  get_all_articles,
  update_article,
  delete_article,
} from "../controllers/ArticleController";

const router = express.Router();

router.post("/", create_article);
router.get("/:id", get_article);
router.get("/", get_all_articles);
router.put("/:id", update_article);
router.delete("/:id", delete_article);

export default router;
