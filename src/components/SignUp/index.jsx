import { useNavigate } from 'react-router-native';

import useAuthStorage from '../../hooks/useAuthStorage';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';
import { useApolloClient } from '@apollo/client';
import SignUpContainer from './SignUpContainer';


const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { username, password } = values;
        
    try {
      const result = await signUp({ username, password });
      console.log(result);
      apolloClient.resetStore();

      const result2 = await signIn({ username, password });
      console.log(result2);
      await authStorage.setAccessToken(result2.data.authenticate.accessToken);
      apolloClient.resetStore();
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;