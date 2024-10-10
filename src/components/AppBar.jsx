import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingLeft: theme.padding.medium,
    backgroundColor: theme.colors.textPrimary,
  },
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab text='Repositories' link='/'></AppBarTab>
      <AppBarTab text='Sign in' link='/signin'></AppBarTab>
    </ScrollView>
  </View>
)};

export default AppBar;