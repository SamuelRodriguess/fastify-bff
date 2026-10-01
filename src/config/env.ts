import dotenv from 'dotenv';
dotenv.config();

/** Application environment variables loaded from .env */
export const env = {
  port: Number(process.env.PORT ?? 4000),
  databaseUrl: process.env.DATABASE_URL ?? '',
};