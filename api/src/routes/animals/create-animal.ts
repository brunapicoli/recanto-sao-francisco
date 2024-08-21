import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { prisma } from '../../lib/prisma';
import { fileToDataURI } from '../../utils/file-util';

export async function createAnimal(app: FastifyInstance) {
  app.post('/animal', async (req, reply) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return reply.status(401).send('Usuário não autorizado para adicionar animal');
    }

    const formDataSchema = z.object({
      age: z.number(),
      breed: z.string().optional(),
      coat: z.string().optional(),
      color: z.string().optional(),
      description: z.string(),
      entryDate: z.string(),
      name: z.string(),
      sex: z.enum(['MALE', 'FEMALE']),
      size: z.enum(['SMALL', 'MEDIUM', 'LARGE']),
      species: z.enum(['CAT', 'DOG']),
    });

    const formData = await req.formData();

    const species = formData.get('species');

    let animalData = {} as z.infer<typeof formDataSchema>;
    let uploadResponse = {} as UploadApiResponse;

    for (const [name, value] of formData) {
      if (name === 'photo' && value instanceof File) {
        const dataURI = await fileToDataURI(value);
        uploadResponse = await cloudinary.uploader.upload(dataURI, {
          folder: species === 'CAT' ? 'cats' : 'dogs',
        });
      } else if (name === 'age') {
        animalData[name] = parseInt(value as string, 10);
      } else {
        animalData[name] = value;
      }
    }

    const animal = await prisma.animal.create({
      data: {
        ...animalData,
        coat: animalData.coat || '',
        color: animalData.color || '',
        photo: {
          create: {
            publicId: uploadResponse.public_id,
            url: uploadResponse.secure_url,
          },
        },
      },
    });

    const animalWithPhoto = { ...animal, photo: uploadResponse.secure_url };

    return animalWithPhoto;
  });
}
