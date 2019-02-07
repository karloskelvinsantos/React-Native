import axios from 'axios';

const api = axios.create({
  baseURL: 'http://200.129.13.10:3000/'
});

export default api;