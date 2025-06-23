// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://feedback-management-system-tnca.onrender.com/api',
});

export default API;
