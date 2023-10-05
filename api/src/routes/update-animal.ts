import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
import { prisma } from '../lib/prisma';

export async function updateAnimal(app: FastifyInstance) {
  app.patch('/animal/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = paramsSchema.parse(req.params);

    const bodySchema = z.object({
      age: z.number().optional(),
      breed: z.string().optional(),
      coat: z.string().optional(),
      color: z.string().optional(),
      description: z.string().optional(),
      entryDate: z.date().optional(),
      name: z.string().optional(),
      photo: z.string().optional(),
      sex: z.enum(['MALE', 'FEMALE']).optional(),
      size: z.enum(['SMALL', 'MEDIUM', 'LARGE']).optional(),
    });

    const { age, coat, color, description, name, photo, sex, size, breed, entryDate } = bodySchema.parse(req.body);

    const animalPhoto = await prisma.photo.findUniqueOrThrow({
      where: { animalId: id },
    });

    if (photo) {
      await cloudinary.uploader.upload(photo, {
        public_id: animalPhoto.publicId,
      });
    }

    await prisma.animal.update({
      where: {
        id,
      },
      data: {
        age,
        breed,
        coat,
        color,
        description,
        entryDate,
        name,
        sex,
        size,
      },
    });

    const animal = await prisma.animal.findUniqueOrThrow({
      where: { id },
    });

    const animalWithPhoto = { ...animal, photo: animalPhoto.url };

    return animalWithPhoto;
  });
}
