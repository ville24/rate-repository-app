import { TextInput as NativeTextInput, StyleSheet, View } from 'react-native';
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
});

const TextInput = ({ placeholder, value, handleChange, touched, error, ...props }) => {
  return <View style={styles.inputContainer}>
    <NativeTextInput
        style={touched && error ? {...styles.input, ...styles.error}: styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
        {...props} 
    ></NativeTextInput>
    {touched && error && (
        <Text style={styles.errorText}>{error}</Text>
    )}
    </View>
};

export default TextInput;

