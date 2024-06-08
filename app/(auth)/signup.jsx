import {SafeAreaView} from "react-native-safe-area-context";
import {View, StyleSheet, Text} from "react-native";


export default function Signup(){


    return(
        <SafeAreaView>
            <View style={styles.topContent}>
                <Text style={styles.topText}> Create Account </Text>
                <Text style={styles.subTxt}>Create an account so you can start shipping!!!</Text>
            </View>


        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    topContent : {

    }


})