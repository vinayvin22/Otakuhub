const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  episodes: Number,
  rating: Number,
  likes: { type: Number, default: 0 },
  comments: [{ user: String, text: String }],
  category: String,
  image: String
});

module.exports = mongoose.model('Article', ArticleSchema);
