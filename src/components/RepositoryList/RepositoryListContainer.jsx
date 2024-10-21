import { FlatList, View, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import RepositoryItem from '../RepositoryItem';
import OrderMenu from '../OrderMenu';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, orderBy, orderDirection, handleOrder }) => {
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
            ListHeaderComponent={() => <OrderMenu 
              orderBy={orderBy}
              orderDirection={orderDirection}
              handleOrder={handleOrder}
            />}
        />
    </PaperProvider>
  );

};

export default RepositoryListContainer;