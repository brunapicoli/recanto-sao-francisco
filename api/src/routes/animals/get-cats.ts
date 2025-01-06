import { z } from 'zod';
import 'zod-openapi/extend';
import { FastifyPluginAsyncZodOpenApi } from 'fastify-zod-openapi';
import { prisma } from '../../lib/prisma';
import { animalSchema } from '../../schema/animal';

const schema = {
  tags: ['animals'],
  description: 'List cats',
  operationId: 'getCats',
  response: {
    200: z.array(animalSchema),
  },
};

export const getCats: FastifyPluginAsyncZodOpenApi = async (app) => {
  app.get('/cats', { schema }, async () => {
    const cats = await prisma.animal.findMany({
      where: {
        species: 'CAT',
      },
      orderBy: {
        id: 'desc',
      },
    });

    const catsWithPhoto = await Promise.all(
      cats.map(async (cat) => {
        const photo = await prisma.animalPhoto.findUniqueOrThrow({
          where: { animalId: cat.id },
        });
        return {
          ...cat,
          photo: photo.url,
        };
      })
    );

    return catsWithPhoto;
  });
};
