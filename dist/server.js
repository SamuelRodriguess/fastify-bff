"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = require("./app.js");
const env_js_1 = require("./config/env.js");
async function main() {
    const app = await (0, app_js_1.buildApp)();
    await app.listen({ port: env_js_1.env.port, host: '0.0.0.0' });
    console.log(`BFF running on http://localhost:${env_js_1.env.port}/graphql`);
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
