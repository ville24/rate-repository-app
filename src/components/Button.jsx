import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
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

const Button = ( { title, handlePress, color } ) => 
<Pressable 
    style={ color ? {...styles.button, backgroundColor: color, borderColor: color} : styles.button }
    onPress={handlePress}
>
    <Text style={styles.text} fontWeight="bold" fontSize="subheading">{title}</Text>
  </Pressable>;

export default Button;