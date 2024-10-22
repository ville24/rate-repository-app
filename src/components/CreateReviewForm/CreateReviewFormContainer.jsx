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
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
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
  text: yup
  .string(),
});

const CreateReviewFormContainer = ({onSubmit}) => {
  
  const formik = useFormik({
      initialValues,
      validationSchema,
      onSubmit,
  });
  

  return <View style={styles.container}>
      <TextInput
          placeholder='Repository owner name'
          value={formik.values.ownerName}
          handleChange={formik.handleChange('ownerName')}
          touched={formik.touched.ownerName}
          error={formik.errors.ownerName}
      />
      <TextInput
          placeholder='Repository name'
          value={formik.values.repositoryName}
          handleChange={formik.handleChange('repositoryName')}
          touched={formik.touched.repositoryName}
          error={formik.errors.repositoryName}
      />
      <TextInput
          placeholder='Rating between 0 and 100'
          value={formik.values.rating}
          handleChange={formik.handleChange('rating')}
          touched={formik.touched.rating}
          error={formik.errors.rating}
      />
      <TextInput
          placeholder='Review'
          value={formik.values.text}
          handleChange={formik.handleChange('text')}
          touched={formik.touched.text}
          error={formik.errors.text}
      />
      <Button title='Create a review' handlePress={formik.handleSubmit} />
  </View>;
};

export default CreateReviewFormContainer;