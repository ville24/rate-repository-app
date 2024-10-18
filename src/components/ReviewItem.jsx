import { format } from 'date-fns'

import { View, StyleSheet } from 'react-native';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secondary,
        padding: theme.padding.default,
        flexDirection: 'row',
        gap: theme.padding.medium,
        marginTop: theme.padding.medium,
    },
    rating: {
        textAlign: 'center',
        color: theme.colors.primary,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        borderStyle: 'solid',
        width: 40,
        height: 40,
        borderRadius: 20,
        lineHeight: 35,
    },
    reviewText: {
        paddingTop: theme.padding.medium,
    },
});

const ReviewItem = ({review}) => <View style={styles.container}>
    <Text style={styles.rating} fontWeight="bold" fontSize="subheading">{review.rating}</Text>
    <View>
        <Text fontWeight="bold" >{review.user.username}</Text>
        <Text color="textSecondary">{format(new Date(review.createdAt), 'dd.MM.y')}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
    </View>
</View>

export default ReviewItem;
