import { StyleSheet, View } from 'react-native';
import { Route, Routes } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import RepositorySingleItem from './RepositoryList/RepositorySingleItem';
import CreateReviewForm from './CreateReviewForm';
import SignIn from './SignIn';
import SignUp from './SignUp';

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
        <Routes>
          <Route path="/" element={<RepositoryList />} />
          <Route path=":id" element={<RepositorySingleItem />} />
          <Route path="/createreview" element={<CreateReviewForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignIn signout />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </View>
  );
};

export default Main;