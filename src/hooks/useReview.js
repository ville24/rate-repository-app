import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReview  = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
  
    const createReview = async ({ ownerName,  repositoryName, rating, text  }) => {  
        return mutate({ variables: { review: { ownerName,  repositoryName, rating, text } } } );
    };
    return [createReview, result];
  };

  export default useReview;