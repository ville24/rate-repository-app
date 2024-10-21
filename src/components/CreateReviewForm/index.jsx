import { useNavigate } from 'react-router-native';

import useReview from '../../hooks/useReview';
import { useApolloClient } from '@apollo/client';
import CreateReviewFormContainer from './CreateReviewFormContainer';


const CreateReviewForm = () => {
  const [createReview] = useReview();
  const navigate = useNavigate();
  const apolloClient = useApolloClient();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
        
    try {
      const result = await createReview({ ownerName, repositoryName, rating: parseInt(rating), text });
      console.log(result);
      apolloClient.resetStore();
      navigate(`/${result.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <CreateReviewFormContainer onSubmit={onSubmit}/>;
};

export default CreateReviewForm;