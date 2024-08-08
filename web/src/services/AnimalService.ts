import axios from 'axios';
import { Animal } from 'models/Animals';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const AnimalService = {
  getCats: async (): Promise<Animal[]> => {
    const response = await api.get('/cats');
    return response.data;
  },

  getDogs: async (): Promise<Animal[]> => {
    const response = await api.get('/dogs');
    return response.data;
  },
};
