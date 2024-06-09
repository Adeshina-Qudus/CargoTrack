import React, { useEffect } from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import images from '../constants/images';

export default function Index() {
    const router = useRouter();
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("./(boarding)/boardingPage");
        }, 3000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.background}
                imageStyle={styles.image}
                source={images.background}
            >
                <View style={styles.welcome}>
                    <Text style={styles.welcomeText}>Welcome to CargoTrack</Text>
                    <Text style={styles.subText}>Seamless Shipping, Simplified</Text>
                </View>
                <View style={styles.about}>
                    <Text style={styles.aboutText}>
                        CargoTrack ensures your shipments are tracked with precision, delivered on time, and managed with ease. Whether you're a small business or a large enterprise.
                    </Text>
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
        alignItems: 'center',
    },
    welcome: {
        alignItems: 'center',
        marginBottom: 270,
    },
    welcomeText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 10,
    },
    subText: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 10,
    },
    about: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 250,
    },
    aboutText: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        textShadowColor: 'black',
        textShadowRadius: 10,
    },
    image: {
        opacity: 0.7,
    },
});