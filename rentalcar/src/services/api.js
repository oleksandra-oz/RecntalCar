// src/services/api.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'https://car-rental-api.goit.global';

export const api = axios.create({
  baseURL,
  timeout: 10000, // 10s таймаут
  headers: {
    'Content-Type': 'application/json',
  },
});

// (опційно) інтерсептор для додавання токена пізніше
api.interceptors.request.use(
  config => {
    // якщо буде авторизація: config.headers.Authorization = `Bearer ${token}`
    return config;
  },
  error => Promise.reject(error)
);

// (опційно) інтерсептор відповіді
api.interceptors.response.use(
  res => res,
  err => {
    // тут можна глобально обробити помилки (401, 500 тощо)
    return Promise.reject(err);
  }
);

export default api;
