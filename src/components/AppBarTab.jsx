import { View, Pressable, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: theme.padding.default,
    },
    text: {
        color: theme.colors.secondary,
    },
});

const AppBarTab = () => {
    return (
        <View style={styles.container}>
            <Pressable>
                <Text style={styles.text} fontWeight="bold" fontSize="subheading">Repositories</Text>
            </Pressable>
        </View>
)};

export default AppBarTab;