import { Animal, AnimalFormData } from 'models/Animals';
import { api } from './api';

export const AnimalService = {
  createAnimal: async (data: AnimalFormData) => {
    await api.post('/animal', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteAnimal: async (animalId: number) => {
    await api.delete(`/animal/${animalId}`);
  },

  getCats: async (): Promise<Animal[]> => {
    const response = await api.get('/cats');
    return response.data;
  },

  getDogs: async (): Promise<Animal[]> => {
    const response = await api.get('/dogs');
    return response.data;
  },

  updateAnimal: async (animalId: number, data: Partial<AnimalFormData>) => {
    await api.patch(`/animal/${animalId}`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
