import { useNavigate } from 'react-router-native';

import useSignUp from '../hooks/useReview';
import { useApolloClient } from '@apollo/client';
import SignUpContainer from './SignUpContainer';


const SignUp = () => {
  const [signUp] = useSignUp();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { username, password } = values;
        
    try {
      const result = await signUp({ username, password });
      console.log(result);
      apolloClient.resetStore();
      navigate(`/${result.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;