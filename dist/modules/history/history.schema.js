"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historySchema = void 0;
exports.historySchema = `#graphql
  type SearchHistory {
    id: String!
    query: String!
    searchedAt: String!
  }

  extend type Query {
    history(limit: Float): [SearchHistory!]!
  }
`;
