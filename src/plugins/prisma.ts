import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from '../config/env.js';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

/** Singleton PrismaClient with PostgreSQL adapter, shared across the app. */
export const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: env.databaseUrl }),
});

/** Registers PrismaClient on the Fastify instance and disconnects on close. */
export async function prismaPlugin(app: FastifyInstance) {
  app.decorate('prisma', prisma);

  app.addHook('onClose', async () => {
    await prisma.$disconnect();
  });
}