import { z } from 'zod';

export const animalSchema = z.object({
  id: z.number(),
  age: z.number(),
  breed: z.string(),
  coat: z.string(),
  color: z.string(),
  description: z.string(),
  entryDate: z.string(),
  name: z.string(),
  photo: z.string(),
  sex: z.enum(['MALE', 'FEMALE']),
  size: z.enum(['SMALL', 'MEDIUM', 'LARGE']),
  species: z.enum(['CAT', 'DOG']),
});
