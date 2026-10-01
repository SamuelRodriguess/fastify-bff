"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apolloPlugin = apolloPlugin;
const fastify_1 = __importDefault(require("@as-integrations/fastify"));
const server_1 = require("@apollo/server");
const schema_js_1 = require("../graphql/schema.js");
async function apolloPlugin(app) {
    const server = new server_1.ApolloServer({ schema: schema_js_1.schema });
    await server.start();
    app.register((0, fastify_1.default)(server), { prefix: '/graphql' });
}
