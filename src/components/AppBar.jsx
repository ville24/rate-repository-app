import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import useMe from '../hooks/useMe';

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
  const { me } = useMe();
  
  return (
  <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab text='Repositories' link='/'></AppBarTab>
      {
        !me && <AppBarTab text='Sign in' link='/signin'></AppBarTab>
      }
      {
        me && <AppBarTab text='Sign out' link='/signout'></AppBarTab>
      }
    </ScrollView>
  </View>
)};

export default AppBar;