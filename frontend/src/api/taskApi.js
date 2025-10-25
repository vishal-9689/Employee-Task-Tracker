import axios from 'axios';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api') + '/tasks';

export const getTasks = (params = {}) => axios.get(API_URL, { params }).then(r => r.data);
export const getTask = (id) => axios.get(`${API_URL}/${id}`).then(r => r.data);
export const createTask = (task) => axios.post(API_URL, task).then(r => r.data);
export const updateTask = (id, updates) => axios.put(`${API_URL}/${id}`, updates).then(r => r.data);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`).then(r => r.data);