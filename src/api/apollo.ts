import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tzzu5w0dmi01uof2j5et3q/master',
  cache: new InMemoryCache()
})