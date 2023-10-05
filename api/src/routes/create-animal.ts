import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
import { prisma } from '../lib/prisma';

export async function createAnimal(app: FastifyInstance) {
  app.post('/animal', async (req) => {
    const bodySchema = z.object({
      age: z.number(),
      breed: z.string().optional(),
      coat: z.string(),
      color: z.string(),
      description: z.string(),
      entryDate: z.date().optional(),
      name: z.string(),
      photo: z.string(),
      sex: z.enum(['MALE', 'FEMALE']),
      size: z.enum(['SMALL', 'MEDIUM', 'LARGE']),
      species: z.enum(['CAT', 'DOG']),
    });

    const { age, coat, color, description, name, photo, sex, size, species, breed, entryDate } = bodySchema.parse(
      req.body
    );

    const response = await cloudinary.uploader.upload(photo, { folder: species === 'CAT' ? 'cats' : 'dogs' });

    const animal = await prisma.animal.create({
      data: {
        age,
        breed,
        coat,
        color,
        description,
        entryDate,
        name,
        photo: {
          create: {
            publicId: response.public_id,
            url: response.secure_url,
          },
        },
        sex,
        size,
        species,
      },
    });

    const animalWithPhoto = { ...animal, photo: response.secure_url };

    return animalWithPhoto;
  });
}
