import Fastify from 'fastify';
import { prismaPlugin } from './plugins/prisma.js';
import { apolloPlugin } from './plugins/apollo.js';

export async function buildApp() {
  const app = Fastify({ logger: true });

  app.register(prismaPlugin);
  app.register(apolloPlugin);

  return app;
}