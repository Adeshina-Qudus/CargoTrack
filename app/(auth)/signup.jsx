import {SafeAreaView} from "react-native-safe-area-context";
import {View, StyleSheet, Text, ScrollView, TextInput} from "react-native";
import {useState} from "react";
import * as Yup from 'yup'
import {isValidEmail, isValidObjField, updateError} from "../utils/methods";

const validationSchema = Yup.object({
    fullName : Yup.string()
        .trim()
        .min(3,"invalid name")
        .required("FullName Is Required"),
    email : Yup.string().email('invalid email').required("email is required"),
    password : Yup.string()
        .matches(/^[A-Z][a-zA-Z0-9]{7}$/, "Password must start with a capital letter and be followed by exactly 7 letters or numbers")
        .trim()
        .min(8,"password is to short")
        .required("password is required "),
    confirmPassword : Yup.string().equals(
        [Yup.ref('password'),null],
        'passsword does not match'
    )
})
export default function Signup({navigation}){
    const [userInfo,setUserInfo] = useState({
        fullName : '',
        email : '',
        phoneNumber :'',
        password : '',
        confirmPassword : ''
    })

    const [error, setError] = useState('')

    const {fullName , email, phoneNumber , password , confirmPassword } = userInfo
    const handleOnChangeText = (value, fieldName) =>{
        setUserInfo({...userInfo, [fieldName]:value})
    }

    const isValidForm = () => {
        if (!isValidObjField(userInfo))
            return updateError('Required all fields!', setError);
        if (!fullName.trim() || fullName.length < 3)
            return updateError('Invalid name!', setError);
        if (!isValidEmail(email)) return updateError('Invalid email!', setError);
        if (!password.trim() || password.length < 8)
            return updateError('Password is less then 8 characters!', setError);
        if (password !== confirmPassword)
            return updateError('Password does not match!', setError);
        return true;
    };

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.topContent}>
                    <Text style={styles.topText}> Create Account </Text>
                    <Text style={styles.subTxt}>Create an account so you can start shipping!!!</Text>
                </View>

                <TextInput
                    />

            </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    topContent : {

    }


})