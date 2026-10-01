"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyResolvers = void 0;
exports.historyResolvers = {
    Query: {
        history: async (_, { limit }) => {
            return [];
        },
    },
};
