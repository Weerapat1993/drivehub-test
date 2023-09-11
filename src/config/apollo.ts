import { ApolloClient, InMemoryCache } from '@apollo/client';
import { accessToken, graphqlContentfulUrl } from './contentful';

export const client = new ApolloClient({
  uri: graphqlContentfulUrl,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
  },
  cache: new InMemoryCache(),
});