import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { v2 as cloudinary } from 'cloudinary';
import { prisma } from '../../lib/prisma';

interface Photo {
  create: {
    publicId: string;
    url: string;
  };
}

export async function updateDirector(app: FastifyInstance) {
  app.patch('/director/:id', async (req) => {
    const paramsSchema = z.object({
      id: z.coerce.number(),
    });

    const { id } = paramsSchema.parse(req.params);

    const bodySchema = z.object({
      name: z.string().optional(),
      photo: z.string().optional(),
      position: z.string().optional(),
    });

    const { name, photo, position } = bodySchema.parse(req.body);

    const directorPhoto = await prisma.directorPhoto.findUnique({
      where: { directorId: id },
    });

    const updateDirector = async (photo?: Photo) => {
      const directorUpdated = await prisma.director.update({
        where: {
          id,
        },
        data: { name, photo, position },
      });

      return directorUpdated;
    };

    if (!photo) {
      const newDirector = await updateDirector();
      return { ...newDirector, photo: directorPhoto?.url };
    }

    if (directorPhoto) {
      await cloudinary.uploader.upload(photo, {
        public_id: directorPhoto.publicId,
      });

      const newDirector = updateDirector();

      return { ...newDirector, photo: directorPhoto.url };
    } else {
      const response = await cloudinary.uploader.upload(photo, { folder: 'directors' });

      const newPhoto = {
        create: {
          publicId: response.public_id,
          url: response.secure_url,
        },
      };

      const newDirector = updateDirector(newPhoto);

      return { ...newDirector, photo: response.secure_url };
    }
  });
}
