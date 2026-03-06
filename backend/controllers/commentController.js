const Comment = require('../models/Comment');

const addComment = async (req, res) => {
  const { text } = req.body;
  try {
    const comment = await Comment.create({
      articleId: req.params.articleId,
      userId: req.user._id,
      username: req.user.username,
      text,
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCommentsByArticle = async (req, res) => {
  try {
    const comments = await Comment.find({ articleId: req.params.articleId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addComment, getCommentsByArticle };
