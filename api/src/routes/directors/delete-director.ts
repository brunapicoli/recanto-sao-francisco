import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
import { prisma } from '../../lib/prisma';

export async function deleteDirector(app: FastifyInstance) {
  app.delete('/director/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = paramsSchema.parse(req.params);

    const photo = await prisma.directorPhoto.findUnique({
      where: { directorId: id },
    });

    if (photo) {
      await cloudinary.uploader.destroy(photo.publicId);

      await prisma.directorPhoto.delete({
        where: { directorId: id },
      });
    }

    await prisma.director.delete({
      where: {
        id,
      },
    });
  });
}
