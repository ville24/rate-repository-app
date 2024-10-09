import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import Title from './Title';
import Description from './Description';
import Tag from './Tag';
import Count from './Count';

import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        padding: theme.padding.default,
        backgroundColor: theme.colors.secondary,
    },
    flexContainer1: {
        flexDirection: 'row',
        gap: theme.padding.medium,
    },
    flexContainer2: {
        flex: 'unset',
        gap: theme.padding.medium,
        paddingLeft: theme.padding.default,
        paddingBottom: theme.padding.medium,
    },
    flexContainer3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
  });

const RepositoryItem = (obj) => {
    return (
        <View style={styles.container}>
            <View style={styles.flexContainer1}>
                <Avatar uri={obj.item.ownerAvatarUrl} />
                <View style={styles.flexContainer2}>
                    <Title text={obj.item.fullName}></Title>
                    <Description text={obj.item.description}></Description>
                    <View style={styles.flexContainer1}>
                        <Tag labelText={obj.item.language}></Tag>
                    </View>
                </View>
            </View>
            <View style={styles.flexContainer3}>
                <Count title='Stars' value={obj.item.stargazersCount}></Count>
                <Count title='Forks' value={obj.item.forksCount}></Count>
                <Count title='Reviews' value={obj.item.reviewCount}></Count>
                <Count title='Rating' value={obj.item.ratingAverage}></Count>
            </View>
        </View>
    );
};
  
export default RepositoryItem;