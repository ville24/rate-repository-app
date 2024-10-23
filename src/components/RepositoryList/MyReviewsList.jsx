import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import useMe from '../../hooks/useMe';

const MyReviewsList = () => {
    const { me } = useMe(true);
    
    const reviews = me
    ? me.reviews.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} my />}
            keyExtractor={({ id }) => id}
        />
    );
};

export default MyReviewsList;