"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const index_js_1 = require("../modules/search/index.js");
const index_js_2 = require("../modules/history/index.js");
const typeDefs = `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${index_js_1.searchSchema}
  ${index_js_2.historySchema}
`;
exports.schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers: [index_js_1.searchResolvers, index_js_2.historyResolvers] });
