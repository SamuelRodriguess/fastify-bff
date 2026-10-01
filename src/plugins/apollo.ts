import { FastifyInstance } from 'fastify';
import fastifyApollo from '@as-integrations/fastify';
import { ApolloServer } from '@apollo/server';
import { schema } from '../graphql/schema.js';

export async function apolloPlugin(app: FastifyInstance) {
  const server = new ApolloServer({ schema });
  await server.start();

  app.register(fastifyApollo(server), { prefix: '/graphql' });
}