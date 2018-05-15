import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3003',
    timeout: 1000
  });