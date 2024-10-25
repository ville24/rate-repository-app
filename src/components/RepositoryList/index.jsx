import * as React from 'react';

import RepositoryListContainer from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = React.useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = React.useState('DESC');
  const [searchKeyword, setSearchKeyword] = React.useState('');

  const handleOrder = (orderByValue, orderDirectionValue) => {
    setOrderBy(orderByValue);
    setOrderDirection(orderDirectionValue);
  };

  const { repositories, fetchMore } = useRepositories( { orderBy, orderDirection, searchKeyword, first: 3 } );

  const handleSearch = (value) => {
    setSearchKeyword(value);
  };

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer 
    repositories={repositories}
    orderBy={orderBy}
    orderDirection={orderDirection}
    handleOrder={handleOrder}
    searchKeyword={searchKeyword}
    handleSearch={handleSearch}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;