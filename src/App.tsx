

import { ApolloProvider, gql, useQuery } from '@apollo/client'
import { client } from './lib/apollo'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
 

interface Lesson {
  id:string
  title:string
}

function App() {
 
  return( 
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>

  )
}

export default App
