import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: theme.padding.default,
        paddingBottom: theme.padding.default,
        paddingLeft: theme.padding.default,
    },
    text: {
        color: theme.colors.secondary,
    },
});

const AppBarTab = ({text, link}) => {
    return (
        <View style={styles.container}>
            <Link to={link}>
                <Text style={styles.text} fontWeight="bold" fontSize="subheading">{text}</Text>
            </Link>
        </View>
)};

export default AppBarTab;