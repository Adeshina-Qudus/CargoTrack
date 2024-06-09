// import {Stack} from "expo-router";
// import DrawerNavigator from "./drawer/drawetNav";
//
// export default function RootLayout() {
//     console.log("Root layout")
//     return (
//         <Stack>
//             <Stack.Screen name="index" options={{headerShown:false}}/>
//             <Stack.Screen name="(boarding)/boardingPage" options={{headerShown:false}}/>
//             <Stack.Screen name="(auth)/signuporsignin" options={{headerShown:false}}/>
//             <Stack.Screen name="(auth)/signup" options={{headerShown:false}}/>
//             <Stack.Screen name="(auth)/signin" options={{headerShown:false}}/>
//             <Stack.Screen name="(home)/homePage" options={{ headerShown: false }} />
//             <Stack.Screen name="trackItems/trackItems" options={{headerShown : false}}/>
//             <Stack.Screen name="paymentInquiry/paymentInquiry" options={{headerShown : false}}/>
//         </Stack>
//     );
// }





import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomDrawerContent from './ContentController';


export default function _layout() {
    return <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: -20
            },
            // drawerActiveBackgroundColor: 'gray',
            // drawerActiveTintColor: 'white',
            // drawerInactiveTintColor: 'white'
        }}
        drawerContent={CustomDrawerContent}
    >

        <Drawer.Screen
            name="home"
            options={{
                drawerLabel: 'Home',
                title: 'Home',
                drawerIcon: ({size, color})=>(
                    <Ionicons name='md-home' size={size} color={color} />
                )

            }}
        />
        <Drawer.Screen
            name="index"
            options={{
                drawerLabel: 'About',
                title: 'About',
                drawerIcon: ({size, color})=>(
                    <Ionicons name='ios-information-circle' size={size} color={color} />
                )

            }}
        />

    </Drawer>
}