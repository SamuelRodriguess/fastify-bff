import { makeExecutableSchema } from '@graphql-tools/schema';
import { searchSchema, searchResolvers } from '../modules/search/index.js';
import { historySchema, historyResolvers } from '../modules/history/index.js';

const typeDefs = `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${searchSchema}
  ${historySchema}
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers: [searchResolvers, historyResolvers] });