import * as React from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = React.useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = React.useState('DESC');

  const handleOrder = (orderByValue, orderDirectionValue) => {
    setOrderBy(orderByValue);
    setOrderDirection(orderDirectionValue);
  };

  const { repositories } = useRepositories(orderBy, orderDirection);
  return <RepositoryListContainer 
    repositories={repositories}
    orderBy={orderBy}
    orderDirection={orderDirection}
    handleOrder={handleOrder}
  />;
};

export default RepositoryList;