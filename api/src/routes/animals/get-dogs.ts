import { z } from 'zod';
import 'zod-openapi/extend';
import { FastifyPluginAsyncZodOpenApi } from 'fastify-zod-openapi';
import { prisma } from '../../lib/prisma';
import { animalSchema } from '../../schema/animal';

const schema = {
  tags: ['animals'],
  description: 'List dogs',
  operationId: 'getDogs',
  response: {
    200: z.array(animalSchema),
  },
};

export const getDogs: FastifyPluginAsyncZodOpenApi = async (app) => {
  app.get('/dogs', { schema }, async () => {
    const dogs = await prisma.animal.findMany({
      where: {
        species: 'DOG',
      },
      orderBy: {
        id: 'desc',
      },
    });

    const dogsWithPhoto = await Promise.all(
      dogs.map(async (dog) => {
        const photo = await prisma.animalPhoto.findUniqueOrThrow({
          where: { animalId: dog.id },
        });
        return {
          ...dog,
          photo: photo.url,
        };
      })
    );

    return dogsWithPhoto;
  });
};
