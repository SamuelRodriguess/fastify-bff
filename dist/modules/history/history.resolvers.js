"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyResolvers = void 0;
const history_service_js_1 = require("./history.service.js");
exports.historyResolvers = {
    Query: {
        history: async (_, { limit }) => {
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
        addHistory: async (_, { input }) => {
            return (0, history_service_js_1.historyService)(input.query);
        },
    },
};
