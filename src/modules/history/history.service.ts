import { PrismaClient } from '@prisma/client';
import { FastifyInstance } from 'fastify';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

export async function historyService(app: FastifyInstance, query: string) {
  const prisma = app.prisma;
  return prisma.searchHistory.create({
    data: { query, searchedAt: new Date() },
  });
}
