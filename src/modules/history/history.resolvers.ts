import { historySchema } from './history.schema.js';
import { historyService } from './history.service.js';

export const historyResolvers = {
  Query: {
    history: async (_: unknown, { limit }: { limit?: number }) => {
      return [];
    },
  },
  Mutation: {
    /**
     * Saves a search query to the SearchHistory table.
     * @param _ - parent resolver value (unused)
     * @param input - { query: string }
     * @returns the created SearchHistory record
     */
    addHistory: async (
      _: unknown,
      { input }: { input: { query: string } },
    ) => {
      return historyService(input.query);
    },
  },
};