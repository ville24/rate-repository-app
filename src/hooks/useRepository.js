import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const repositoryId = id;
  const { data, error, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId },
  });
  const repository = data && data.repository ? data.repository : null;
  return { repository, error, loading }
};

export default useRepository;