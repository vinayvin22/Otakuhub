const express = require('express');
const { addComment, getCommentsByArticle } = require('../controllers/commentController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/:articleId', getCommentsByArticle);
router.post('/:articleId', protect, addComment);

module.exports = router;
