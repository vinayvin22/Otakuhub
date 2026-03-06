const express = require('express');
const { getArticles, getArticlesByCategory, likeArticle } = require('../controllers/articleController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getArticles);
router.get('/category/:category', getArticlesByCategory);
router.post('/:id/like', protect, likeArticle);

module.exports = router;
