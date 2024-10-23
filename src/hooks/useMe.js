import { useQuery } from '@apollo/client';

import { ME } from '../graphql/queries';

const useMe = (includeReviews) => {
  const getReviews = includeReviews ? true : false;

  const { data, error, loading, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: getReviews }
  });
  const me = data && data.me ? data.me : null;
  return { me, error, loading, refetch }
};

export default useMe;