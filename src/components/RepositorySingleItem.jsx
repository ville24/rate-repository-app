import { useParams } from 'react-router-native';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
//import useRepository from '../hooks/useRepository';

const RepositorySingleItem = () => {
    //const { repository } = useRepository();
    const { id } = useParams();

    const item = {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl:
        'https://avatars2.githubusercontent.com/u/4060187?v=4',
        url: 'https://github.com/jaredpalmer/formik'
    };

    const reviews = [
        {
            id: 'abc123',
            text: 'lorem ipsum',
            rating: 95,
            createdAt: '2024-04-13',
            user: {
                id: '123',
                username: 'kalle'
            }
        },
        {
            id: 'abc124',
            text: 'lorem ipsum2',
            rating: 100,
            createdAt: '2024-04-14',
            user: {
                id: '124',
                username: 'elina'
            }
        },
        {
            id: 'abc125',
            text: 'lorem ipsum2',
            rating: 1,
            createdAt: '2024-04-14',
            user: {
                id: '124',
                username: 'elina'
            }
        }
    ];      

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