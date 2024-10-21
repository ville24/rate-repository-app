import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu } from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
    menuContainer: {
        padding: theme.padding.medium,
        flexDirection: 'row',
        justifyContent: 'left',
    }
});

const OrderMenu = ( { orderBy, orderDirection, handleOrder } ) => {
  const [visible, setVisible] = React.useState(false);
  const [order, setOrder] = React.useState('');

  React.useEffect(() => {
    if (orderBy === 'CREATED_AT') { setOrder('Latest repositories') };
    if (orderBy === 'RATING_AVERAGE' && orderDirection === 'ASC') { setOrder('Lowest rated repositories') };
    if (orderBy === 'RATING_AVERAGE' && orderDirection === 'DESC') { setOrder('Highest rated repositories') };
  }, [orderBy, orderDirection])

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleMenu = (orderByValue, orderByDirectionValue ) => {
    closeMenu();
    handleOrder(orderByValue, orderByDirectionValue);
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
                onPress={()=>{handleMenu('CREATED_AT', 'DESC')}} 
                title="Latest repositories"
            />
            <Menu.Item
                onPress={()=>{handleMenu('RATING_AVERAGE', 'DESC')}}
                title="Highest rated repositories"
            />
            <Menu.Item
                onPress={()=>{handleMenu('RATING_AVERAGE', 'ASC')}}
                title="Lowest rated repositories"
            />
        </Menu>
      </View>
    ;
};

export default OrderMenu;