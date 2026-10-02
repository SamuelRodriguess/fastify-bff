# FASTIFY BFF

Fastify-based BFF (Backend for Frontend) orchestrating VTEX Intelligent Search API + PostgreSQL.

<img width="857" height="478" alt="image" src="https://github.com/user-attachments/assets/616f65e6-036b-42fc-9041-ce22d4f98037" />

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

  
