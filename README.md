# fastify-bff

Fastify-based BFF (Backend for Frontend) orchestrating VTEX Intelligent Search API + PostgreSQL.

## Run

```bash
pnpm start
```

Server starts on http://localhost:4000/graphql

## Example Queries

### Search products
```graphql
query {
  search(input: { query: "camisa", count: 10 }) {
    productId
    name
    price
    imageUrl
    link
    brand
  }
}
```

### Add search history
```graphql
mutation {
  addHistory(input: { query: "camisa" }) {
    id
    query
    searchedAt
  }
}
```

### Get history
```graphql
query {
  history(limit: 10) {
    id
    query
    searchedAt
  }
}
```

## Endpoints

- `POST /graphql` — GraphQL API
- `GET /playground` — GraphQL Playground UI

## Stack

- Fastify v5
- Apollo Server v5
- Prisma Client v7 + PostgreSQL (PrismaPg adapter)
- TypeScript 7