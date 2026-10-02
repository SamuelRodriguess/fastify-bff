import { getHistory } from './history.service.js';
import { historyService } from './history.service.js';

export const historyResolvers = {
  Query: {
    /**
     * Returns recent search history records.
     * @param _ - parent resolver value (unused)
     * @param limit - max records to return
     * @returns array of SearchHistory records
     */
    history: async (_: unknown, { limit }: { limit?: number }) => {
      return getHistory(limit ?? 10);
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