import axios from "axios";

const API_URL = "http://localhost:8080";

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getTickets = () => axios.get(`${API_URL}/tickets`);
export const createTicket = (ticket) => axios.post(`${API_URL}/tickets/signup`, ticket);
export const updateTicket = (ticket) => axios.put(`${API_URL}/tickets/update/${ticket.id}`, ticket);
export const deleteTicket = (id) => axios.delete(`${API_URL}/tickets/delete/${id}`);
