import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: theme.padding.default,
  },
  inputContainer: {
    marginBottom: theme.padding.default,
  },
  input: {
    color: theme.colors.secondaryLight,
    padding: theme.padding.default,
    marginBottom: theme.padding.small,
    borderWidth: 1,
    borderColor: theme.colors.secondaryLight,
    borderRadius: 5,
  },
  error: {
    borderColor: theme.colors.error,
  },
  errorText: {
    color: theme.colors.error,
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

const validationSchema = yup.object().shape({  
  username: yup
  .string()
  .required('Username is required'),
  password: yup
  .string()
  .required('Password is required'),
});

const SignInContainer = ({onSubmit}) => {

  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
  });

    return <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
            style={formik.touched.username && formik.errors.username ? {...styles.input, ...styles.error}: styles.input}
            placeholder="Username"
            value={formik.values.username}
            onChangeText={formik.handleChange('username')}
        ></TextInput>
        {formik.touched.username && formik.errors.username && (
            <Text style={styles.errorText}>{formik.errors.username}</Text>
        )}
        </View>
        <View style={styles.inputContainer}>
        <TextInput
            secureTextEntry
            style={formik.touched.password && formik.errors.password ? {...styles.input, ...styles.error}: styles.input}
            placeholder="Password"
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
        ></TextInput>
        {formik.touched.password && formik.errors.password && (
            <Text style={styles.errorText}>{formik.errors.password}</Text>
        )}
        </View>
        <Pressable 
          style={styles.button}
          onPress={formik.handleSubmit}
        >
            <Text style={styles.text} fontWeight="bold" fontSize="subheading">Sign in</Text>
        </Pressable>
    </View>;
};

export default SignInContainer;