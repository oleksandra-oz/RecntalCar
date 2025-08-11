import api from './api';

export const fetchCars = () => api.get('/cars');
export const fetchCarById = (id) => api.get(`/cars/${id}`,`${id}`);
export const fetchCarByBrand = (brand) => api.get(`/cars/${brand}`);
export const bookCar = (carId, payload) => api.post(`/cars/${carId}/book`, payload);;