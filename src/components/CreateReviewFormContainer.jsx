import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Text from './Text';

import theme from '../theme';

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
    ownerName: '',
    repositoryName: '',
    rating: '',
    review: '',
  };
  
const validationSchema = yup.object().shape({  
  ownerName: yup
  .string()
  .required('Repository owner name is required'),
  repositoryName: yup
  .string()
  .required('Repository name is required'),
  rating: yup
  .number()
  .required('Rating is required'),
  review: yup
  .string(),
});
  
const CreateReviewFormContainer = ({onSubmit}) => {
  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
  });

  return <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
            style={formik.touched.ownerName && formik.errors.ownerName ? {...styles.input, ...styles.error}: styles.input}
            placeholder="Repository owner name"
            value={formik.values.ownerName}
            onChangeText={formik.handleChange('ownerName')}
        ></TextInput>
        {formik.touched.ownerName && formik.errors.ownerName && (
            <Text style={styles.errorText}>{formik.errors.ownerName}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
            style={formik.touched.repositoryName && formik.errors.repositoryName ? {...styles.input, ...styles.error}: styles.input}
            placeholder="Repository repositoryName"
            value={formik.values.repositoryName}
            onChangeText={formik.handleChange('repositoryName')}
        ></TextInput>
        {formik.touched.repositoryName && formik.errors.repositoryName && (
            <Text style={styles.errorText}>{formik.errors.repositoryName}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
            style={formik.touched.rating && formik.errors.rating ? {...styles.input, ...styles.error}: styles.input}
            placeholder="Rating between 0 and 100"
            value={formik.values.rating}
            onChangeText={formik.handleChange('rating')}
        ></TextInput>
        {formik.touched.rating && formik.errors.rating && (
            <Text style={styles.errorText}>{formik.errors.rating}</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
            style={formik.touched.review && formik.errors.review ? {...styles.input, ...styles.error}: styles.input}
            placeholder="Review"
            value={formik.values.review}
            onChangeText={formik.handleChange('review')}
            multiline
        ></TextInput>
        {formik.touched.review && formik.errors.review && (
            <Text style={styles.errorText}>{formik.errors.review}</Text>
        )}
      </View>
      <Pressable 
      style={styles.button}
      onPress={formik.handleSubmit}
      >
          <Text style={styles.text} fontWeight="bold" fontSize="subheading">Create a review</Text>
      </Pressable>
  </View>;
};

export default CreateReviewFormContainer;