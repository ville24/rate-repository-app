import { FlatList } from 'react-native';
import ReviewItem from './ReviewItem';
import useMe from '../../hooks/useMe';

const MyReviewsList = () => {
    const { me, refetch } = useMe(true);
    
    const reviews = me && me.reviews
    ? me.reviews.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} my refetch={refetch} />}
            keyExtractor={({ id }) => id}
        />
    );
};

export default MyReviewsList;