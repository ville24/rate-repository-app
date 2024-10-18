import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';

import theme from '../theme';

const styles = StyleSheet.create({
    menuContainer: {
        padding: theme.padding.medium,
        flexDirection: 'row',
        justifyContent: 'left',
    }
});

const OrderMenu = () => {
  const [visible, setVisible] = React.useState(false);
  const [order, setOrder] = React.useState('Latest repositories');

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleMenu = (value) => {
    setOrder(value);
    closeMenu();
  }

  return <View
        style={styles.menuContainer}>
        <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={<Button 
                    onPress={openMenu}
                    textColor='black'
                    contentStyle={{flexDirection: 'row-reverse'}}
                    labelStyle={{fontSize: 16, fontWeight: 'normal'}}
                    icon="menu-down"
                >{order}</Button>}
            contentStyle={{backgroundColor:'white'}}
        >
            <Menu.Item
                onPress={()=>{handleMenu('Latest repositories')}} 
                title="Latest repositories"
            />
            <Menu.Item
                onPress={()=>{handleMenu('Highest rated repositories')}}
                title="Highest rated repositories"
            />
            <Menu.Item
                onPress={()=>{handleMenu('Lowest rated repositories')}}
                title="Lowest rated repositories"
            />
        </Menu>
      </View>
    ;
};

export default OrderMenu;