import * as Linking from 'expo-linking';
import { View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

import Avatar from '../RepositoryItem/Avatar';
import Title from '../Title';
import Description from '../Description';
import Tag from '../Tag';
import Count from '../Count';
import Text from '../Text';

import theme from '../../theme';

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
        flex: 1,
        gap: theme.padding.medium,
        paddingLeft: theme.padding.default,
        paddingBottom: theme.padding.medium,
    },
    flexContainer3: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        color: theme.colors.secondary,
        padding: theme.padding.default,
        marginTop: theme.padding.default,
        marginBottom: theme.padding.default,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        borderRadius: 5,
        backgroundColor: theme.colors.primary,
    },
        text: {
        color: theme.colors.secondary,
        textAlign: 'center',
    },
});

const RepositoryItem = ({item, single}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/${item.id}`);
    }

    return (
        <>
            {
                !single ?
                    <Pressable onPress={handleNavigate}>
                        <Item item={item} single={single} />
                    </Pressable>
                :
                    <Item item={item} single={single} />
            }
        </>
    );
};

const Item = ({item, single}) => {
    const handleLink = () => {
        Linking.openURL(item.url);
    }
    
    return <View style={styles.container} testID="repositoryItem">
        <View style={styles.flexContainer1}>
            <Avatar uri={item.ownerAvatarUrl} />
            <View style={styles.flexContainer2}>
                <Title text={item.fullName}></Title>
                <Description text={item.description}></Description>
                <View style={styles.flexContainer1}>
                    <Tag labelText={item.language}></Tag>
                </View>
            </View>
        </View>
        <View style={styles.flexContainer3}>
            <Count title='Stars' value={item.stargazersCount}></Count>
            <Count title='Forks' value={item.forksCount}></Count>
            <Count title='Reviews' value={item.reviewCount}></Count>
            <Count title='Rating' value={item.ratingAverage}></Count>
        </View>
        {
            single && 
            <Pressable 
                style={styles.button}
                onPress={handleLink}
            >
                <Text style={styles.text} fontWeight="bold" fontSize="subheading">Open in GitHub</Text>
            </Pressable>
        }
    </View>
};
  
export default RepositoryItem;