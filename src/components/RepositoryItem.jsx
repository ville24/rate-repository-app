import { View, Text } from 'react-native';

const RepositoryItem = (obj) => {
    return (
        <View>
            <Text>Full name: {obj.item.fullName}</Text>
            <Text>Description: {obj.item.description}</Text>
            <Text>Language: {obj.item.language}</Text>
            <Text>Stars: {obj.item.stargazersCount}</Text>
            <Text>Forks: {obj.item.forksCount}</Text>
            <Text>Reviews: {obj.item.reviewCount}</Text>
            <Text>Rating: {obj.item.ratingAverage}</Text>
        </View>
    );
};
  
export default RepositoryItem;