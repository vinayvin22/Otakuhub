import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Add token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);
export const fetchArticles = () => API.get('/articles');
export const fetchArticlesByCategory = (category) => API.get(`/articles/category/${category}`);
export const likeArticle = (id) => API.post(`/articles/${id}/like`);
export const fetchComments = (articleId) => API.get(`/comments/${articleId}`);
export const postComment = (articleId, text) => API.post(`/comments/${articleId}`, { text });

export default API;
