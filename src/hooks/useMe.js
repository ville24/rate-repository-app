import { useQuery } from '@apollo/client';

import { ME } from '../graphql/queries';

const useMe = (includeReviews) => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews }
  });
  const me = data && data.me ? data.me : null;
  return { me, error, loading }
};

export default useMe;