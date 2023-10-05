import fastify from 'fastify';
import cors from '@fastify/cors';
import { v2 as cloudinary } from 'cloudinary';
import { getCats } from './routes/get-cats';
import { getDogs } from './routes/get-dogs';
import { createAnimal } from './routes/create-animal';
import { deleteAnimal } from './routes/delete-animal';
import { updateAnimal } from './routes/update-animal';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
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

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!');
  });
