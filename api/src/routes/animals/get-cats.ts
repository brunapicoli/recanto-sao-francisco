import { FastifyInstance } from 'fastify';
import { prisma } from '../../lib/prisma';

export async function getCats(app: FastifyInstance) {
  app.get('/cats', async () => {
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
}
