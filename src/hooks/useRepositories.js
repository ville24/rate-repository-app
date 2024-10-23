import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderBy, orderDirection, filter) => {
  const searchKeyword = filter
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword },
  });
  const repositories = data && data.repositories ? data.repositories : null;
  return { repositories, error, loading }
};

export default useRepositories;