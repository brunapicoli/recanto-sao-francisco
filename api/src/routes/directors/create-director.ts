import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
import { prisma } from '../../lib/prisma';

export async function createDirector(app: FastifyInstance) {
  app.post('/director', async (req) => {
    const bodySchema = z.object({
      name: z.string(),
      photo: z.string().optional(),
      position: z.string(),
    });

    const { name, photo, position } = bodySchema.parse(req.body);

    const directorInitialData = { name, position };

    if (photo) {
      const response = await cloudinary.uploader.upload(photo, { folder: 'directors' });

      const director = await prisma.director.create({
        data: {
          ...directorInitialData,
          photo: {
            create: {
              publicId: response.public_id,
              url: response.secure_url,
            },
          },
        },
      });

      return { ...director, photo: response.secure_url };
    } else {
      const director = await prisma.director.create({
        data: directorInitialData,
      });

      return director;
    }
  });
}
