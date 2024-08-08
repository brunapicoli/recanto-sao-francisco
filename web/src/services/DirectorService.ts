import axios from 'axios';
import { Director } from 'models/Directors';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const DirectorService = {
  getDirectors: async (): Promise<Director[]> => {
    const response = await api.get('/directors');
    return response.data;
  },
};
