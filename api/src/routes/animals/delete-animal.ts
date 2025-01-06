import { z } from 'zod';
import 'zod-openapi/extend';
import { v2 as cloudinary } from 'cloudinary';
import { FastifyPluginAsyncZodOpenApi } from 'fastify-zod-openapi';
import { prisma } from '../../lib/prisma';

const schema = {
  tags: ['animals'],
  description: 'Delete animal',
  operationId: 'deleteAnimal',
  headers: z.object({
    authorization: z.string().optional(),
  }),
  params: z.object({
    id: z.coerce.number(),
  }),
  response: {
    401: z.object({ message: z.string() }),
  },
};

export const deleteAnimal: FastifyPluginAsyncZodOpenApi = async (app) => {
  app.delete('/animal/:id', { schema }, async (req, reply) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return reply.status(401).send({ message: 'Usuário não autorizado para excluir animal' });
    }

    const { id } = req.params;

    const photo = await prisma.animalPhoto.findUniqueOrThrow({
      where: { animalId: id },
    });

    await cloudinary.uploader.destroy(photo.publicId);

    await prisma.animalPhoto.delete({
      where: { animalId: id },
    });

    await prisma.animal.delete({
      where: {
        id,
      },
    });
  });
};
