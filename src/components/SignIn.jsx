import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { useFormik } from 'formik';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: theme.padding.default,
  },
  input: {
      color: theme.colors.secondaryLight,
      padding: theme.padding.default,
      marginBottom: theme.padding.default,
      borderWidth: 1,
      borderColor: theme.colors.secondaryLight,
      borderRadius: 5,
  },
  button: {
    color: theme.colors.secondary,
    padding: theme.padding.default,
    marginBottom: theme.padding.default,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.secondary,
    textAlign: 'center',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Username"
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    ></TextInput>
    <TextInput
      secureTextEntry
      style={styles.input}
      placeholder="Password"
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
    ></TextInput>
    <Pressable 
      style={styles.button}
      onPress={formik.handleSubmit}
    >
        <Text style={styles.text} fontWeight="bold" fontSize="subheading">Sign in</Text>
      </Pressable>
  </View>;
};

export default SignIn;