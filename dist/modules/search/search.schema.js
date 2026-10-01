"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSchema = void 0;
exports.searchSchema = `#graphql
  type Product {
    productId: String!
    name: String
    price: Float
    imageUrl: String
    brand: String
    link: String
  }

  input SearchInput {
    query: String!
    count: Float
  }

  extend type Query {
    search(input: SearchInput!): [Product!]!
  }
`;
