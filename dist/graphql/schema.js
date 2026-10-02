"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const search_schema_js_1 = require("../modules/search/search.schema.js");
const search_resolvers_js_1 = require("../modules/search/search.resolvers.js");
const history_schema_js_1 = require("../modules/history/history.schema.js");
const history_resolvers_js_1 = require("../modules/history/history.resolvers.js");
const typeDefs = `#graphql
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${search_schema_js_1.searchSchema}
  ${history_schema_js_1.historySchema}
`;
exports.schema = (0, schema_1.makeExecutableSchema)({ typeDefs, resolvers: [search_resolvers_js_1.searchResolvers, history_resolvers_js_1.historyResolvers] });
