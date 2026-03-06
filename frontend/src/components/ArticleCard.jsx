import React, { useState } from 'react';
import { Heart, MessageCircle, User } from 'lucide-react';
import { likeArticle } from '../services/api';

const ArticleCard = ({ article }) => {
  const [likes, setLikes] = useState(article.likes?.length || 0);
  const [isLiked, setIsLiked] = useState(article.likes?.includes(JSON.parse(localStorage.getItem('user'))?._id));

  const handleLike = async () => {
    try {
      const { data } = await likeArticle(article._id);
      setLikes(data.likes.length);
      setIsLiked(!isLiked);
    } catch (error) {
      alert('Login to like articles!');
    }
  };

  return (
    <div className="article-card glass-effect">
      <img src={article.image} alt={article.title} className="article-image" />
      <div className="article-content">
        <span className="article-category">{article.category}</span>
        <h3 className="article-title">{article.title}</h3>
        <p className="article-desc">{article.description}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: '#888', marginBottom: '1rem' }}>
          <User size={14} /> {article.author}
        </div>
        <div className="article-actions">
          <button 
            className={`action-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
            {likes}
          </button>
          <button className="action-btn">
            <MessageCircle size={18} /> Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
