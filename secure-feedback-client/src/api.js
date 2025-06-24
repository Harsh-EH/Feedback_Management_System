// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://feedback-management-system-tnca.onrender.com/api', // ✅ This should match your local backend
});

export default API;
