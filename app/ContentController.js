import {Pressable, Text, View} from "react-native";
import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {DrawerActions} from "@react-navigation/native";
import {useNavigation} from "expo-router";
import {useSafeAreaInsets} from "react-native-safe-area-context";


export default function CustomDrawerContent(props, children) {

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = ()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
    }
    return (
        <View
            style={{flex: 1}}
        >
            <DrawerContentScrollView {...props} scrollEnabled={false}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            { children}
            <Pressable onPress={closeDrawer} style={{padding: 20, paddingBottom: bottom+10}}>
                <Text>Logout</Text>
            </Pressable>
        </View>
    )
}