import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { prisma } from '../../lib/prisma';
import { fileToDataURI } from '../../utils/file-util';

export async function updateAnimal(app: FastifyInstance) {
  app.patch('/animal/:id', async (req, reply) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return reply.status(401).send('Usuário não autorizado para atualizar animal');
    }

    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = paramsSchema.parse(req.params);

    const formDataSchema = z.object({
      age: z.number().optional(),
      breed: z.string().optional(),
      coat: z.string().optional(),
      color: z.string().optional(),
      description: z.string().optional(),
      entryDate: z.string().optional(),
      name: z.string().optional(),
      photo: z.string().optional(),
      sex: z.enum(['MALE', 'FEMALE']).optional(),
      size: z.enum(['SMALL', 'MEDIUM', 'LARGE']).optional(),
    });

    const animalPhoto = await prisma.animalPhoto.findUniqueOrThrow({
      where: { animalId: id },
    });

    const formData = await req.formData();

    let animalData = {} as z.infer<typeof formDataSchema>;

    for (const [name, value] of formData) {
      if (name === 'photo' && value instanceof File) {
        const dataURI = await fileToDataURI(value);
        const uploadResponse = await cloudinary.uploader.upload(dataURI, {
          public_id: animalPhoto.publicId,
          invalidate: true,
        });
        animalData.photo = uploadResponse.secure_url;
      } else if (name === 'age') {
        animalData[name] = parseInt(value as string, 10);
      } else {
        animalData[name] = value;
      }
    }

    await prisma.animal.update({
      where: {
        id,
      },
      data: {
        age: animalData.age,
        breed: animalData.breed,
        coat: animalData.coat,
        color: animalData.color,
        description: animalData.description,
        entryDate: animalData.entryDate,
        name: animalData.name,
        photo: {
          update: {
            url: animalData.photo,
          },
        },
        sex: animalData.sex,
        size: animalData.size,
      },
    });

    return { ...animalData };
  });
}
