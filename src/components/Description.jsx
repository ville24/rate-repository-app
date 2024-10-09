import { View } from 'react-native';
import Text from './Text';

const Description = ({text}) => {
    return (
        <View>
            <Text color="textSecondary">{text}</Text>
        </View>
)};

export default Description;