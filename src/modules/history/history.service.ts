import { PrismaClient } from '@prisma/client';
import { prisma } from '../../plugins/prisma.js';

/**
 * Saves a search query to the SearchHistory table.
 * @param query - the search term to save
 * @returns the created SearchHistory record
 */
export async function historyService(query: string) {
  return prisma.searchHistory.create({
    data: { query, searchedAt: new Date() },
  });
}

/**
 * Retrieves search history records, most recent first.
 * @param limit - max records to return (default 10)
 * @returns array of SearchHistory records
 */
export async function getHistory(limit: number = 10) {
  return prisma.searchHistory.findMany({
    orderBy: { searchedAt: 'desc' },
    take: limit,
  });
}