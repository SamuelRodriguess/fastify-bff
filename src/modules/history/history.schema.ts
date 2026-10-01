export const historySchema = `#graphql
  type SearchHistory {
    id: String!
    query: String!
    searchedAt: String!
  }

  input AddHistoryInput {
    query: String!
  }

  extend type Query {
    history(limit: Float): [SearchHistory!]!
  }

  extend type Mutation {
    addHistory(input: AddHistoryInput!): SearchHistory!
  }
`;