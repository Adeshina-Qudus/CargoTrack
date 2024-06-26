import {View, Text, Pressable, SafeAreaView} from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

export default function CustomDrawerContent(props) {

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = ()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
    }
    return (
       <SafeAreaView>
        <View
            style={{flex: 1}}
        >
            <DrawerContentScrollView {...props} scrollEnabled={false}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <Pressable onPress={closeDrawer} style={{padding: 40, paddingBottom: bottom+10}}>
                <Text>Logout</Text>
            </Pressable>
        </View>
       </SafeAreaView>
    )
}