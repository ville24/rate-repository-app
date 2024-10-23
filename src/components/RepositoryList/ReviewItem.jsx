import { format } from 'date-fns'
import { useNavigate } from 'react-router-native';

import { View, StyleSheet } from 'react-native';
import Text from '../Text';

import theme from '../../theme';

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
        minWidth: 40,
    },
    reviewText: {
        paddingTop: theme.padding.medium,
    },
    containerAlert: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

const ReviewItem = ({review, my}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/${review.id}`);
    }

    const handleDelete = () => {

    };

    const createTwoButtonAlert = () =>
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Delete', onPress: () => handleDelete},
        ]);

    return (
        <View style={styles.container}>
            <Text style={styles.rating} fontWeight="bold" fontSize="subheading">{review.rating}</Text>
            <View style={{flex: 1}}>
                <Text fontWeight="bold" >{review.user.username}</Text>
                <Text color="textSecondary">{format(new Date(review.createdAt), 'dd.MM.y')}</Text>
                <Text style={styles.reviewText}>{review.text}</Text>
            </View>
            <View>
                <Button title='View repository' handlePress={handleNavigate} />
                <Button title='Delete review' handlePress={createTwoButtonAlert} color={theme.colors.error} />
            </View>
            <View style={styles.containerAlert}>
                <Button title={'2-Button Alert'} onPress={createTwoButtonAlert} />
            </View>
        </View>
    );
};

export default ReviewItem;
