"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaPlugin = prismaPlugin;
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const env_js_1 = require("../config/env.js");
async function prismaPlugin(app) {
    const adapter = new adapter_pg_1.PrismaPg({ connectionString: env_js_1.env.databaseUrl });
    app.decorate('prisma', new client_1.PrismaClient({ adapter }));
    app.addHook('onClose', async (app) => {
        await app.prisma.$disconnect();
    });
}
