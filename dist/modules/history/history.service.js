"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyService = historyService;
async function historyService(app, query) {
    const prisma = app.prisma;
    return prisma.searchHistory.create({
        data: { query, searchedAt: new Date() },
    });
}
