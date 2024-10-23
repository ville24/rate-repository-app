import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const useReviewDelete  = () => {
    const [mutate, result] = useMutation(DELETE_REVIEW);
  
    const deleteReview = async ({ deleteReviewId }) => {
        return mutate( { variables: { deleteReviewId } } );
    };
    return [deleteReview, result];
  };

  export default useReviewDelete;