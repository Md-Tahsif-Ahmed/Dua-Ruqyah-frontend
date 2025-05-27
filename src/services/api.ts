// lib/api.ts
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Change this to your API
});

export const getCategories = () => API.get('/categories');
export const getSubcategories = (catId: number) => API.get(`/subcategories?catId=${catId}`);
export const getDuas = (subcatId: number) => API.get(`/duas?subcatId=${subcatId}`);
