import { ApolloClient, createNetworkInterface } from 'apollo-client';

const uri = process.env.API_URL || 'http://0.0.0.0:3000/api';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri,
  }),
  ssrForceFetchDelay: 100,
});

export default client;
