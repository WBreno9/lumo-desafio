import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';
import models from './models'

let server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: {
    models
  }
});

const PORT = 4000;
server.listen({ port: PORT }).then(({url}) => {
  console.log(`Server listening at: ${url}`);
});

