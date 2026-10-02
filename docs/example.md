```
query search {
  search(input: {query: "piso",count: 11}){
      name
  }
}

graphql query {
  history(limit: 10) {
    id
    query
    searchedAt
  }
}

```