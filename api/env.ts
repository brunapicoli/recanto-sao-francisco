import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  CLOUD_NAME: z.string(),
  API_KEY: z.string(),
  API_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
