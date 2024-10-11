import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main'

import createApolloClient from './src/utils/apolloClient';

import { NativeRouter } from 'react-router-native';

const apolloClient = createApolloClient();

const App = () => {
  return <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
};

export default App;