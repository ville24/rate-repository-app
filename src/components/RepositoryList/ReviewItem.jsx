import { format } from 'date-fns'
import { useNavigate } from 'react-router-native';

import useReviewDelete from '../../hooks/useReviewDelete';

import { View, StyleSheet, Alert } from 'react-native';
import Text from '../Text';
import Button from '../Button';

import theme from '../../theme';

const styles = StyleSheet.create({
    containerBackGround: {
        backgroundColor: theme.colors.secondary,
        marginTop: theme.padding.medium,
    },
    container: {
        padding: theme.padding.default,
        flexDirection: 'row',
        gap: theme.padding.medium,
    },
    containerButtons: {
        padding: theme.padding.default,
        paddingTop: 0,
        paddingBottom: 0,
        flexDirection: 'row',
        gap: theme.padding.medium,
        justifyContent: 'space-around',
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
});

const ReviewItem = ({review, my, refetch}) => {
    const navigate = useNavigate();
    const [deleteReview] = useReviewDelete();

    const handleNavigate = () => {
        navigate(`/${review.repositoryId}`);
    }

    const handleDelete = async () => {
        try {
            const result = await deleteReview({ deleteReviewId: review.id });
            console.log(result);
            refetch();
          } catch (e) {
            console.log(e);
          }
    };

    const createTwoButtonAlert = () =>
        Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'Delete', onPress: handleDelete},
        ]);

    return (
        <View style={styles.containerBackGround}>
            <View style={styles.container}>
                <Text style={styles.rating} fontWeight="bold" fontSize="subheading">{review.rating}</Text>
                <View style={{flex: 1}}>
                    <Text fontWeight="bold" >{review.user.username}</Text>
                    <Text color="textSecondary">{format(new Date(review.createdAt), 'dd.MM.y')}</Text>
                    <Text style={styles.reviewText}>{review.text}</Text>
                </View>
            </View>
            {
                my && <View style={styles.containerButtons}>
                    <Button title='View repository' handlePress={handleNavigate} />
                    <Button title='Delete review' handlePress={createTwoButtonAlert} color={theme.colors.error} />
                </View>
            }
        </View>
    );
};

export default ReviewItem;
