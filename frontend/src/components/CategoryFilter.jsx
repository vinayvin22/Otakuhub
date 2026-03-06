import React from 'react';

const categories = ['All', 'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="filter-container">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
