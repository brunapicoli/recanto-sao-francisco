import { Director } from 'models/Directors';
import { api } from './api';

export const DirectorService = {
  getDirectors: async (): Promise<Director[]> => {
    const response = await api.get('/directors');
    return response.data;
  },
};
