"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyService = historyService;
const prisma_js_1 = require("../../plugins/prisma.js");
/**
 * Saves a search query to the SearchHistory table.
 * @param query - the search term to save
 * @returns the created SearchHistory record
 */
async function historyService(query) {
    return prisma_js_1.prisma.searchHistory.create({
        data: { query, searchedAt: new Date() },
    });
}
