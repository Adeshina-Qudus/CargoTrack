import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Link, router } from 'expo-router';
import background from '../../constants/images';

export default function BoardingPage() {

    function startShipping() {
        router.push("/signuporsignin");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.background}
                imageStyle={styles.image}
                source={background.background}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>
                        Easy and fast platform for shipping
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={startShipping}>
                        <Text style={styles.buttonText}>Start shipping &gt;&gt;&gt;</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
    },
    mainText: {
        fontSize: 45,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 10,
        textAlign: 'center',
    },
    image: {
        opacity: 0.7,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        height: 40,
        marginHorizontal: 20,
        borderRadius: 20,
        marginBottom: 50,
    },
    buttonText: {
        fontSize: 25,
        color: 'white',
    },
});