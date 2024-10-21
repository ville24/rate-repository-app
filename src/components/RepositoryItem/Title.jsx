import { View } from 'react-native';
import Text from '../Text';

const Title = ({text}) => {
    return (
        <View>
            <Text fontWeight="bold">{text}</Text>
        </View>
)};

export default Title;