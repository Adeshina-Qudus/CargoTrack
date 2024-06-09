import React, { useState } from 'react';
import {SafeAreaView, TouchableOpacity, View, StyleSheet, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRouter} from 'expo-router';
import FormContainer from '../../components/FormContainer';
import FormInput from '../../components/FormInput';
import images from '../../constants/images';

export default function HomePage() {
    const [searchShipment, setSearchShipment] = useState({ trackingId: '' });
    const { trackingId } = searchShipment;

        const router = useRouter()
    const handleOnChangeText = (value, fieldName) => {
        setSearchShipment({ ...searchShipment, [fieldName]: value });
    };

    const handleTrackShipping = () => {
        router.navigate("trackItems/trackItems");
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={styles.shippingBackground}
                imageStyle={styles.image}
                source={images.track}
            >
                <View style={styles.shipping}>
                    <Text style={styles.trackText}>Track your shipping</Text>
                    <TouchableOpacity onPress={handleTrackShipping} >
                        <Icon name='rocket' size={30} color="#000" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <Text style={styles.review}>Review your Shipment</Text>
            <View style={styles.table}>
                <FormContainer >
                    <FormInput
                        value={trackingId}
                        onChangeText={value => handleOnChangeText(value, 'trackingId')}
                        placeholder="Enter tracking id ....."
                        style={styles.input}
                    />
                </FormContainer>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    menuButtonContainer: {
        marginBottom: 20,
    },
    menuButton: {
        marginTop: 20,
    },
    shippingBackground: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 220,
        width: 300,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    image: {
        opacity: 0.8,
        borderRadius: 10,
    },
    shipping: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 140,
        gap: 30,
    },
    trackText: {
        fontSize: 20,
    },
    review: {
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    input: {
        display : "flex",
        width : 300, marginBottom : 300
    },
    table : {
        marginBottom : 2500
    }
});