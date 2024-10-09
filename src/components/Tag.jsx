import { View, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
    tag: {
        padding: 6,
        color: theme.colors.secondary,
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        width: 'fit-content',
    },
  });

const Tag = ({labelText}) => {
    return (
        <View>
            <Text style={styles.tag}>{labelText}</Text>
        </View>
)};

export default Tag;