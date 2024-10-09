import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60,
    },
  });

const Avatar = (uri) => {
    return (
        <Image
            style={styles.logo}
            source={uri}
        />
)};

export default Avatar;