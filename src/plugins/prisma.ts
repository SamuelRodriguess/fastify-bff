import { FastifyInstance } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { env } from '../config/env.js';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export async function prismaPlugin(app: FastifyInstance) {
  const adapter = new PrismaPg({ connectionString: env.databaseUrl });
  app.decorate('prisma', new PrismaClient({ adapter }));

  app.addHook('onClose', async (app) => {
    await app.prisma.$disconnect();
  });
}