"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
exports.prismaPlugin = prismaPlugin;
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const env_js_1 = require("../config/env.js");
/** Singleton PrismaClient with PostgreSQL adapter, shared across the app. */
exports.prisma = new client_1.PrismaClient({
    adapter: new adapter_pg_1.PrismaPg({ connectionString: env_js_1.env.databaseUrl }),
});
/** Registers PrismaClient on the Fastify instance and disconnects on close. */
async function prismaPlugin(app) {
    app.decorate('prisma', exports.prisma);
    app.addHook('onClose', async () => {
        await exports.prisma.$disconnect();
    });
}
