const express = require('express');
const router = express.Router();
const Article = require('../models/Article');

// ✅ Get all or by category (use query)
router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const filter = category ? { category } : {};
    const articles = await Article.find(filter).limit(25);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ✅ Add new
router.post('/', async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.json(newArticle);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ✅ Like
router.post('/:id/like', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.likes += 1;
    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// ✅ Comment
router.post('/:id/comment', async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    article.comments.push({ text: req.body.text });
    await article.save();
    res.json(article);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
