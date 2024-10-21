import { useNavigate } from 'react-router-native';

import useAuthStorage from '../../hooks/useAuthStorage';
import useSignIn from '../../hooks/useSignIn';
import { useApolloClient } from '@apollo/client';
import SignInContainer from './SignInContainer';

const SignIn = ({signout}) => {
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
    } catch (e) {
      console.log(e);
    }
  };
  signout && signOut();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
        
    try {
      const result = await signIn({ username, password });
      console.log(result);
      await authStorage.setAccessToken(result.data.authenticate.accessToken);
      apolloClient.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
  
};

export default SignIn;