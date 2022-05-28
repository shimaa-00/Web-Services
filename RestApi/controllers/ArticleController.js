import Article from "../models/Article.js";
export const create_article = async (req, res, next) => {
  const article = new Article({ ...req.body, date: Date.now() });

  try {
    const article_save = await article.save();
    res.status(201).json(article_save);
  } catch (error) {
    next(error);
  }
};
export const get_article = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(201).json(article);
  } catch (error) {
    next(error);
  }
};

export const get_all_articles = async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.status(201).json(articles);
  } catch (error) {
    next(error);
  }
};

export const update_article = async (req, res, next) => {
  try {
    const article_update = await Article.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).json(article_update);
  } catch (error) {
    next(error);
  }
};

export const delete_article = async (req, res, next) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(201).json("article  deleted");
  } catch (error) {
    next(error);
  }
};
