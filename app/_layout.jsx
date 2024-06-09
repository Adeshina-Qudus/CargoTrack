import React from 'react'
import { Drawer } from 'expo-router/drawer';

import CustomDrawerContent from './ContentController';
import SignUpOrSignIn from "./(auth)/signuporsignin";
import BoardingPage from "./(boarding)/boardingPage";
import Signup from "./(auth)/signup";
import SignIn from "./(auth)/signin";
import HomePage from "./(home)/homePage";


export default function _layout() {
    return <Drawer
        screenOptions={{
            drawerLabelStyle: {
                marginLeft: -20
            },
        }}
        drawerContent={CustomDrawerContent}
    >

        <Drawer.Screen
            name="index"
            options={{
                title: 'index',
                headerShown : false
            }}
        />
        <Drawer.Screen
            name="(boarding)/boardingPage"
            options={{
                title: '(boarding)/boardingPage',
                headerShown : false
            }}
        />
        <Drawer.Screen
            name="(auth)/signuporsignin"
            options={{
                title: '(auth)/signuporsignin',
                headerShown : false
            }}
        />
        <Drawer.Screen
            name="(auth)/signup"
            options={{
                drawerLabel: 'Create Account',
                title: '(auth)/signup',
                headerShown : false
            }}
        />
        <Drawer.Screen
            name="(auth)/signin"
            options={{
                title: '(auth)/signin',
                headerShown : false
            }}
        />
        <Drawer.Screen
            name="(home)/homePage"
            options={{
                title: '(home)/homePage',
                headerShown : false
            }}
        />

   </Drawer>
}