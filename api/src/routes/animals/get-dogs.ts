import { FastifyInstance } from 'fastify';
import { prisma } from '../../lib/prisma';

export async function getDogs(app: FastifyInstance) {
  app.get('/dogs', async () => {
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
}
