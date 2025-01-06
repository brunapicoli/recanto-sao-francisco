import { z } from 'zod';
import 'zod-openapi/extend';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { FastifyPluginAsyncZodOpenApi } from 'fastify-zod-openapi';
import { prisma } from '../../lib/prisma';
import { animalSchema } from '../../schema/animal';

const schema = {
  tags: ['animals'],
  description: 'Update animal',
  operationId: 'updateAnimal',
  consumes: ['multipart/form-data'],
  params: z.object({
    id: z.coerce.number(),
  }),
  headers: z.object({
    authorization: z.string().optional(),
  }),
  body: animalSchema
    .omit({ id: true })
    .merge(
      z.object({
        age: z.coerce.number(),
        photo: z.string().openapi({
          type: 'string',
          format: 'binary',
        }),
      })
    )
    .partial(),
  response: {
    200: animalSchema,
    401: z.object({ message: z.string() }),
  },
};

export const updateAnimal: FastifyPluginAsyncZodOpenApi = async (app) => {
  app.patch('/animal/:id', { schema }, async (req, reply) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return reply.status(401).send({ message: 'Usuário não autorizado para atualizar animal' });
    }

    const { id } = req.params;

    const animalPhoto = await prisma.animalPhoto.findUniqueOrThrow({
      where: { animalId: id },
    });

    const animalData = req.body;

    let uploadResponse = {} as UploadApiResponse;

    if (animalData.photo) {
      uploadResponse = await cloudinary.uploader.upload(animalData.photo, {
        public_id: animalPhoto.publicId,
        invalidate: true,
      });
    }

    const animal = await prisma.animal.update({
      where: {
        id,
      },
      data: {
        ...animalData,
        photo: {
          update: {
            url: uploadResponse.secure_url,
          },
        },
      },
    });

    const animalWithPhoto = { ...animal, photo: uploadResponse.secure_url || animalPhoto.url };

    return animalWithPhoto;
  });
};
