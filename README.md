## NextJS, TypeScript, GraphQL and Mongo

Installation:

```bash
yarn create next-app nextjs-typescript-graphql-mongo
```

Packages:

```bash
yarn add --dev typescript @types/react @types/node
yarn add graphql
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript prettier
```

Folder Structure:

- `components` reusable React components
- `pages` public endpoints (pages and API)
- `pages/api` GraphQL API endpoint
- `public` Images, stylesheets etc.
- `src` all other source files
- `src/graphql` GraphQL schema and resolvers
- `src/dao` Data-access objects for MongoDB
- `store` Application state information

GraphQL schema into Typescript definition files; this is done by creating file `codegen.yaml`

```bash
overwrite: true
hooks:
  afterAllFileWrite:
    - prettier --write
schema:
  - ./src/graphql/schema.graphql
generates:
  ./src/graphql/types.tsx:
    plugins:
      - typescript
    config:
      withHooks: true # We will be using React Hooks so we disable React Components
      withHOC: false
      withComponent: false
      skipTypename: true
```

In package.json

```bash
"generate": "graphql-codegen"
yarn generate
```

GraphQL server (provided by Apollo Server) and GraphQL client (provided by Apollo React Client)
At the core of GraphQL ecosystems are queries, mutations and resolvers and we will need
to create ours to be able retrieve and modify the data.

```bash
yarn add @graphql-codegen/typescript-resolvers

```

```bash
yarn add apollo-server-micro graphql-import-node
yarn -D add webpack-graphql-loader
yarn -D add @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
yarn add @apollo/client @apollo/react-components node-fetch
```

https://medium.com/@otociulis/next-js-typescript-graphql-mongodb-%EF%B8%8F-7c342319206b
