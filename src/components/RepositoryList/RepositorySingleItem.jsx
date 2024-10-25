import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import ReviewItem from './ReviewItem';
import useRepository from '../../hooks/useRepository';

const RepositorySingleItem = () => {
    let { id } = useParams();
    const repositoryId = id;
    const { repository, fetchMore } = useRepository( { repositoryId, first: 2 } );

    const item = repository ? repository : {};
    
    const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

    const onEndReach = () => {
      fetchMore();
    };

    return (
        <FlatList
          data={reviews}
          renderItem={({ item }) => <ReviewItem review={item} />}
          keyExtractor={({ id }) => id}
          ListHeaderComponent={() => <RepositoryItem item={item} single></RepositoryItem>}
          onEndReach={onEndReach}
        />
    );
};

export default RepositorySingleItem;