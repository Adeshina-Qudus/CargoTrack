import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props) {
    const { bottom } = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = () => {
        navigation.dispatch(DrawerActions.closeDrawer());
    }

    const desiredRoutes = ['(home)/homePage'];

    const filteredRoutes = props.state.routes.filter(route => desiredRoutes.includes(route.name));


    const limitedProps = {
        ...props,
        state: {
            ...props.state,
            routes: filteredRoutes
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...limitedProps} scrollEnabled={false}>
                <DrawerItemList {...limitedProps} />
            </DrawerContentScrollView>
            {props.children}
            <Pressable onPress={closeDrawer} style={{ padding: 20, paddingBottom: bottom + 10 }}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    );
}