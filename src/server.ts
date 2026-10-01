import { buildApp } from './app.js';
import { env } from './config/env.js';

async function main() {
  const app = await buildApp();
  await app.listen({ port: env.port, host: '0.0.0.0' });
  console.log(`BFF running on http://localhost:${env.port}/graphql`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
