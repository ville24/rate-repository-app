import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';

import theme from '../../theme';

const styles = StyleSheet.create({
    menuContainer: {
        padding: theme.padding.default,
    }
});

const FilterMenu = ( { filter, handleFilter } ) => {
    const [searchQuery, setSearchQuery] = React.useState(filter);
    const [value] = useDebounce(searchQuery, 500);    

    React.useEffect(() => {
        handleFilter(value);
    },[value]);

    return <View
        style={styles.menuContainer}>
        <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={{backgroundColor:'white'}}
        />
        <Text>Actual value: {searchQuery}</Text>
        <Text>Debounce value: {value}</Text>
    </View>;
};

export default FilterMenu;