import { makeExecutableSchema } from '@graphql-tools/schema';
import { searchSchema } from '../modules/search/search.schema.js';
import { searchResolvers } from '../modules/search/search.resolvers.js';
import { historySchema } from '../modules/history/history.schema.js';
import { historyResolvers } from '../modules/history/history.resolvers.js';

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