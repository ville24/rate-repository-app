import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
  });
  const repository = data && data.repository ? data.repository : null;
  return { repository, error, loading }
};

export default useRepository;