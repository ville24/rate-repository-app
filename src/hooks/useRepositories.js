import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, filter) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, filter },
  });
  const repositories = data && data.repositories ? data.repositories : null;
  return { repositories, error, loading }
};

export default useRepositories;