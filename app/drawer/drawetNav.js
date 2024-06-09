import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Signup from "../(auth)/signup";
import PaymentInquiry from "../paymentInquiry/paymentInquiry";
import TrackItems from "../trackItems/trackItems";


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="signup" component={Signup} />
            <Drawer.Screen name="payment" component={PaymentInquiry} />
            <Drawer.Screen name="trackItems" component={TrackItems} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator