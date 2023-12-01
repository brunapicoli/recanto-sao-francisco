import { FastifyInstance } from 'fastify';
import { prisma } from '../../lib/prisma';

export async function getDirectors(app: FastifyInstance) {
  app.get('/directors', async () => {
    const directors = await prisma.director.findMany();

    const directorsWithPhoto = await Promise.all(
      directors.map(async (director) => {
        const photo = await prisma.directorPhoto.findUnique({
          where: { directorId: director.id },
        });
        return photo
          ? {
              ...director,
              photo: photo.url,
            }
          : { ...director };
      })
    );

    return directorsWithPhoto;
  });
}
