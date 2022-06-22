import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
 uri:'https://api-sa-east-1.graphcms.com/v2/cl4o7vvnr0yjs01xr6jo82764/master',
 cache: new InMemoryCache()
})