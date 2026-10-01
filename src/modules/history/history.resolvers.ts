import { historySchema } from './history.schema.js';

export const historyResolvers = {
  Query: {
    history: async (_: unknown, { limit }: { limit?: number }) => {
      return [];
    },
  },
};
