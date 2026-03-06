import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../services/api';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const { data } = await fetchArticles();
        setArticles(data);
        setFilteredArticles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredArticles(articles);
    } else {
      setFilteredArticles(articles.filter(art => art.category === activeCategory));
    }
  }, [activeCategory, articles]);

  return (
    <div className="container">
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', fontWeight: 800 }}>Explore Anime World</h1>
        <p style={{ color: '#b3b3b3', maxWidth: '600px', margin: '0 auto' }}>
          Discover the latest articles, reviews, and updates from your favorite anime series.
        </p>
      </div>

      <CategoryFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem' }}>Loading articles...</div>
      ) : (
        <div className="articles-grid">
          {filteredArticles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
