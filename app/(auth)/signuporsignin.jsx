import image from "../../constants/images"
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import {useRouter} from "expo-router";

export default function SignUpOrSignIn() {
    const router = useRouter()
    const [signInColor, setSignInColor] = useState('white');
    const [signUpColor, setSignUpColor] = useState('white');

    const handleSignInPress = () => {
        setSignInColor('orange');
        router.push("signin")
        setSignUpColor('white');
    };

    const handleSignUpPress = () => {
        setSignUpColor('orange');
        router.push("signup")
        setSignInColor('white');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image source={image.signInOrSignUp}/>
            </View>

            <Text style={styles.textSty}>CargoTrack</Text>
            <View style={styles.regisButton}>
                <View>
                    <TouchableOpacity
                        style={[styles.authButton, { backgroundColor: signInColor }]}
                        onPress={handleSignInPress}
                    >
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.authButton, { backgroundColor: signUpColor }]}
                        onPress={handleSignUpPress}
                    >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textSty: {
        fontSize: 50,
        textAlign: 'center',
        color : "orange",
        textShadowColor : "black",
        textShadowRadius : "3"
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    regisButton: {
        flexDirection: 'row',
        gap: 70,
        marginTop: 20,
    },
    authButton: {
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        borderRadius: 5,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});