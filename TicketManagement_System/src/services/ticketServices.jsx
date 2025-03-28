import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tickets';  // Adjust this if your backend URL differs

const getAll = () => {
  return axios.get(API_URL);
};

const get = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const create = (data) => {
  return axios.post(API_URL, data);
};

const update = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data);
};

const deleteTicket = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

const getPriorities = () => {
  return axios.get(`${API_URL}/priorities`);  
};

const getStatuses = () => {
  return axios.get(`${API_URL}/statuses`); 
};

export default {
  getAll,
  get,
  create,
  update,
  delete: deleteTicket,
  getPriorities,
  getStatuses
};
