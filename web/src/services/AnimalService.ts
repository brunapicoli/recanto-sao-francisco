import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const AnimalService = {
  getCats: async () => {
    const response = await api.get('/cats');
    return response.data;
  },

  getDogs: async () => {
    const response = await api.get('/dogs');
    return response.data;
  },
};
