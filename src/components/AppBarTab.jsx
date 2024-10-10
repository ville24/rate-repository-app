import { View, StyleSheet } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        paddingTop: theme.padding.default,
        paddingBottom: theme.padding.default,
        paddingLeft: theme.padding.medium,
        paddingRight: theme.padding.medium,
    },
    text: {
        color: theme.colors.secondary,
    },
});

const AppBarTab = ({text, link}) => {
    return (
        <View>
            <Link to={link} style={styles.container}>
                <Text style={styles.text} fontWeight="bold" fontSize="subheading">{text}</Text>
            </Link>
        </View>
)};

export default AppBarTab;