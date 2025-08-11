import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
  timeout: 10000,
});

export const fetchCars = (params) => api.get('/cars', { params });
export const fetchCarById = (id) => api.get('/cars/{id}',{id});
export const fetchCarByBrand = () => api.get('/brands');