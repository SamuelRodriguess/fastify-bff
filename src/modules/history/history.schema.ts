export const historySchema = `#graphql
  type SearchHistory {
    id: String!
    query: String!
    searchedAt: String!
  }

  extend type Query {
    history(limit: Float): [SearchHistory!]!
  }
`;
