import { FastifyInstance } from 'fastify';
import fastifyApollo from '@as-integrations/fastify';
import { ApolloServer } from '@apollo/server';
import { schema } from '../graphql/schema.js';

/** Registers Apollo GraphQL server on /graphql prefix with app in context. */
export async function apolloPlugin(app: FastifyInstance) {
  const server = new ApolloServer({ schema });
  await server.start();

  app.register(fastifyApollo(server), {
    prefix: '/graphql',
    context: async (request: any) => {
    console.log('CONTEXT request.server.prisma:', typeof request.server?.prisma);
    return { prisma: request.server.prisma };
  },
  } as any);
}