import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from "../(auth)/signup";
import PaymentInquiry from "../paymentInquiry/paymentInquiry";
import TrackItems from "../trackItems/trackItems";
import HomePage from "../(home)/homePage";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";


// const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    console.log("Debugging...")
    return (
            <Drawer>
                <Drawer.Screen
                    name="index" //
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',
                    }}
                />
                <Drawer.Screen
                    name=""
                    options={{
                        drawerLabel: 'User',
                        title: 'overview',
                    }}
                />
            </Drawer>
        // <Drawer.Navigator initialRouteName="HomePage">
        //     <Drawer.Screen name="home" component={HomePage} />
        //     <Drawer.Screen name="signup" component={Signup} />
        //     <Drawer.Screen name="payment" component={PaymentInquiry} />
        //     <Drawer.Screen name="trackItems" component={TrackItems} />
        // </Drawer.Navigator>
    );
}

export default DrawerNavigator