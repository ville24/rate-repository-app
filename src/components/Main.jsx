import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <RepositoryList></RepositoryList>
    </View>
  );
};

export default Main;