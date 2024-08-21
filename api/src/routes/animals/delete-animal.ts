import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
import { prisma } from '../../lib/prisma';

export async function deleteAnimal(app: FastifyInstance) {
  app.delete('/animal/:id', async (req, reply) => {
    const { authorization } = req.headers;

    if (!authorization) {
      return reply.status(401).send('Usuário não autorizado para excluir animal');
    }

    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = paramsSchema.parse(req.params);

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
}
