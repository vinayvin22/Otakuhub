const mongoose = require('mongoose');

<<<<<<< HEAD
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
=======
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
>>>>>>> ba4c7bbf8e6937ca57e177b24abf839e0406b928
