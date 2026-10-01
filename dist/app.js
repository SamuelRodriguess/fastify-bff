"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
const fastify_1 = __importDefault(require("fastify"));
const prisma_js_1 = require("./plugins/prisma.js");
const apollo_js_1 = require("./plugins/apollo.js");
async function buildApp() {
    const app = (0, fastify_1.default)({ logger: true });
    app.register(prisma_js_1.prismaPlugin);
    app.register(apollo_js_1.apolloPlugin);
    return app;
}
