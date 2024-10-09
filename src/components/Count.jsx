import { View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
    }
});

const round = (number) => {
    return number <= 1000 ? number : Math.round(number/100) / 10 + 'k';
}

const Count = ({title, value}) => {
    return (
        <View>
            <Text fontWeight="bold" style={styles.center}>{round(value)}</Text>
            <Text style={styles.center}>{title}</Text>
        </View>
)};

export default Count;