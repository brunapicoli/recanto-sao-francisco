import { z } from 'zod';
import 'zod-openapi/extend';
import { v2 as cloudinary } from 'cloudinary';
import { FastifyPluginAsyncZodOpenApi } from 'fastify-zod-openapi';
import { prisma } from '../../lib/prisma';
import { animalSchema } from '../../schema/animal';

const schema = {
  tags: ['animals'],
  description: 'Create animal',
  operationId: 'createAnimal',
  consumes: ['multipart/form-data'],
  headers: z.object({
    authorization: z.string().optional(),
  }),
  body: animalSchema.omit({ id: true }).merge(
    z.object({
      age: z.coerce.number(),
      breed: z.string().optional(),
      coat: z.string().optional(),
      color: z.string().optional(),
      photo: z.string().openapi({
        type: 'string',
        format: 'binary',
      }),
    })
  ),
  response: {
    201: animalSchema,
    401: z.object({ message: z.string() }),
  },
};

export const createAnimal: FastifyPluginAsyncZodOpenApi = async (app) => {
  app.post('/animal', { schema }, async (req, reply) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return reply.status(401).send({ message: 'Usuário não autorizado para adicionar animal' });
    }

    const animalData = req.body;

    const uploadResponse = await cloudinary.uploader.upload(animalData.photo, {
      folder: animalData.species === 'CAT' ? 'cats' : 'dogs',
    });

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

    return reply.status(201).send(animalWithPhoto);
  });
};
