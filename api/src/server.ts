import fastify from 'fastify';
import cors from '@fastify/cors';
import { v2 as cloudinary } from 'cloudinary';
import { getCats } from './routes/animals/get-cats';
import { getDogs } from './routes/animals/get-dogs';
import { createAnimal } from './routes/animals/create-animal';
import { deleteAnimal } from './routes/animals/delete-animal';
import { updateAnimal } from './routes/animals/update-animal';
import { getDirectors } from './routes/directors/get-directors';
import { createDirector } from './routes/directors/create-director';
import { deleteDirector } from './routes/directors/delete-director';
import { updateDirector } from './routes/directors/update-director';
import { env } from '../env';

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.API_KEY,
  api_secret: env.API_SECRET,
  secure: true,
});

const app = fastify();

app.register(cors, {
  origin: 'http://localhost:3000',
});

app.register(getCats);
app.register(getDogs);
app.register(createAnimal);
app.register(deleteAnimal);
app.register(updateAnimal);

app.register(getDirectors);
app.register(createDirector);
app.register(deleteDirector);
app.register(updateDirector);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
