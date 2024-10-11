import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main'
import Constants from 'expo-constants';

import createApolloClient from './src/utils/apolloClient';

import { NativeRouter } from 'react-router-native';

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.expoConfig);
  return <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
};

export default App;