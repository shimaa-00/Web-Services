const { ApolloServer, gql } = require("apollo-server");
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "every thing will be ok",
    author: "Emily",
  },
  {
    title: "keep tring",
    author: "Hoover",
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});

server.listen(3001).then(({ url }) => {
  console.log(`Server is runnig at ${url}`);
});
