import Fastify from 'fastify';
import { prismaPlugin } from './plugins/prisma.js';
import { apolloPlugin } from './plugins/apollo.js';
import { renderPlaygroundPage } from 'graphql-playground-html';

export async function buildApp() {
  const app = Fastify({ logger: true });

  app.register(prismaPlugin);
  app.register(apolloPlugin);

  app.get('/playground', async (request, reply) => {
    reply.type('text/html');
    return renderPlaygroundPage({ endpoint: '/graphql' });
  });

  return app;
}