import { View, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextInput from '../TextInput';
import Button from '../Button';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: theme.padding.default,
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
        <TextInput
          placeholder='Username'
          value={formik.values.username}
          handleChange={formik.handleChange('username')}
          touched={formik.touched.username}
          error={formik.errors.username}
        />
        <TextInput
          secureTextEntry
          placeholder='Password'
          value={formik.values.password}
          handleChange={formik.handleChange('password')}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
        <Button title='Sign in' handlePress={formik.handleSubmit} />
    </View>;
};

export default SignInContainer;