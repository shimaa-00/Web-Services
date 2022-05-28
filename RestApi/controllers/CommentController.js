import Comment from "../models/Comment.js";
import Article from "../models/Article.js";

export const create_comment = async (req, res, next) => {
  const article_id = req.params.article_id;
  const username_id = req.params.user_id;
  const { content } = req.body;
  const comment = new Comment({
    content,
    date: Date.now(),
    username: username_id,
  });

  try {
    const comment_save = await comment.save();
    try {
      await Article.findByIdAndUpdate(article_id, {
        $push: { comments: comment_save._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(201).json({ message: "comment successfully saved" });
  } catch (error) {
    next(error);
  }
};
export const get_comment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(201).json(comment);
  } catch (error) {
    next(error);
  }
};

export const get_all_comments = async (req, res, next) => {
  const username_id = req.params.user_id;

  try {
    const comments = await Comment.find({ username: username_id });
    res.status(201).json(comments);
  } catch (error) {
    next(error);
  }
};
export const update_comment = async (req, res, next) => {
  try {
    const comment_update = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: { content: req.body.content, date: Date.now() } },
      { new: true }
    );
    res.status(201).json(comment_update);
  } catch (error) {
    next(error);
  }
};

export const delete_comment = async (req, res, next) => {
  const article_id = req.params.article_id;

  try {
    await Comment.findByIdAndDelete(req.params.id);
    try {
      await Article.findByIdAndUpdate(article_id, {
        $pull: { comments: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(201).json("Comment has been deleted!");
  } catch (error) {
    next(error);
  }
};
