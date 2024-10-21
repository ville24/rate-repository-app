import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../../hooks/useRepository';

const RepositorySingleItem = () => {
    let { id } = useParams();
    const { repository } = useRepository(id);

    const item = repository ? repository : {};
    
    const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

    return (
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => <RepositoryItem item={item} single></RepositoryItem>}
        />
    );
};

export default RepositorySingleItem;