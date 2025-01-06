import fastify from 'fastify';
import {
  fastifyZodOpenApiPlugin,
  fastifyZodOpenApiTransform,
  fastifyZodOpenApiTransformObject,
  type FastifyZodOpenApiTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-zod-openapi';
import cors from '@fastify/cors';
import multipart, { ajvFilePlugin } from '@fastify/multipart';
import { fastifySwagger } from '@fastify/swagger';
import { fastifySwaggerUi } from '@fastify/swagger-ui';
import { v2 as cloudinary } from 'cloudinary';
import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { getCats } from './routes/animals/get-cats';
import { getDogs } from './routes/animals/get-dogs';
import { createAnimal } from './routes/animals/create-animal';
import { deleteAnimal } from './routes/animals/delete-animal';
import { updateAnimal } from './routes/animals/update-animal';
import { bufferToDataURI } from './utils/file-util';
import { env } from '../env';

cloudinary.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.API_KEY,
  api_secret: env.API_SECRET,
  secure: true,
});

const app = fastify({ ajv: { plugins: [ajvFilePlugin] } }).withTypeProvider<FastifyZodOpenApiTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(cors, {
  origin: 'http://localhost:3000',
});

app.register(fastifyZodOpenApiPlugin);

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Recanto São Francisco',
      version: '1.0.0',
    },
  },
  transform: fastifyZodOpenApiTransform,
  transformObject: fastifyZodOpenApiTransformObject,
});

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
});

async function onFile(part) {
  const buffer = await part.toBuffer();
  const dataURI = bufferToDataURI(buffer);
  part.value = dataURI;
}

app.register(multipart, { attachFieldsToBody: 'keyValues', onFile });

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

app.ready().then(() => {
  const spec = app.swagger();
  writeFile(resolve(__dirname, 'swagger.json'), JSON.stringify(spec, null, 2), 'utf-8');
});
