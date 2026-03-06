const Article = require('../models/Article');

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({});
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArticlesByCategory = async (req, res) => {
  try {
    const articles = await Article.find({ category: req.params.category });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const likeArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });

    const alreadyLiked = article.likes.find(id => id.toString() === req.user._id.toString());
    if (alreadyLiked) {
      article.likes = article.likes.filter(id => id.toString() !== req.user._id.toString());
    } else {
      article.likes.push(req.user._id);
    }
    await article.save();
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getArticles, getArticlesByCategory, likeArticle };
