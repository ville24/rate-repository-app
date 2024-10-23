import * as React from 'react';

import { FlatList, View, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import RepositoryItem from '../RepositoryItem';
import OrderMenu from '../OrderMenu';
import FilterMenu from '../FilterMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

/*export const RepositoryListContainer = ({ repositories, orderBy, orderDirection, handleOrder, filter, handleFilter }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <PaperProvider>
      <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({item}) => (     
                <RepositoryItem key={item.id} item={item}></RepositoryItem>
            )}
            ListHeaderComponent={() => <>
              <FilterMenu
                filter={filter}
                handleFilter={handleFilter}
              ></FilterMenu>
              <OrderMenu 
                orderBy={orderBy}
                orderDirection={orderDirection}
                handleOrder={handleOrder}
              />
            </>}
        />
    </PaperProvider>
  );

};

export default RepositoryListContainer;*/

export default class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <>
        <FilterMenu
          filter={props.filter}
          handleFilter={props.handleFilter}
        ></FilterMenu>
        <OrderMenu 
          orderBy={props.orderBy}
          orderDirection={props.orderDirection}
          handleOrder={props.handleOrder}
        />
      </>
    );
  };

  render() {
    const props = this.props;
    
    const repositoryNodes = props.repositories
    ? props.repositories.edges.map(edge => edge.node)
    : [];

    return (
      <PaperProvider>
        <FlatList
              data={repositoryNodes}
              ItemSeparatorComponent={ItemSeparator}
              renderItem={({item}) => (     
                  <RepositoryItem key={item.id} item={item}></RepositoryItem>
              )}
              ListHeaderComponent={this.renderHeader}
          />
      </PaperProvider>
    );
  }
}