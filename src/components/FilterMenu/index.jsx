import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';

import theme from '../../theme';

const styles = StyleSheet.create({
    menuContainer: {
        padding: theme.padding.default,
        paddingBottom: 0,
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
    </View>;
};

export default FilterMenu;