import {SafeAreaView} from "react-native-safe-area-context";
import {View, StyleSheet, Text, ScrollView} from "react-native";
import {useState} from "react";
import * as Yup from 'yup'
import {isValidEmail, isValidObjField, updateError} from "../utils/methods";
import FormContainer from "../../components/FormContainer";
import {Formik} from "formik";
import FormInput from "../../components/FormInput";
import FormSubmitButton from "../../components/FormSubmitButton";
import {Link} from "expo-router";

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
        'password does not match'
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

    const submitForm = () =>{
        if (isValidForm()){
            console.log(userInfo)
        }
    }

    function signup() {

    }

    return(
        <SafeAreaView>
                    <View style={styles.topContent}>
                        <Text style={styles.topText}> Create Account </Text>
                        <Text style={styles.subTxt}>Create an account so you can start shipping</Text>
                    </View>

                <FormContainer>
                    <Formik
                        initialValues={userInfo}
                        validationSchema={validationSchema}
                        onSubmit={signup}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                        }) => {
                            const {fullName , email, phoneNumber, password, confirmPassword} = values
                            return(
                                <>
                                    <FormInput
                                        value={fullName}
                                        error={touched.fullName && errors.fullName}
                                        onChangeText={handleChange('fullName')}
                                        onBlur={handleBlur('fullName')}
                                        label='FullName'
                                        placeholder='Enter you full name '
                                    />
                                    <FormInput
                                        value={email}
                                        error={touched.email && errors.email}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        autoCapitalize='none'
                                        label='Email'
                                        placeholder='example@email.com'
                                    />
                                    <FormInput
                                        value={phoneNumber}
                                        error={touched.phoneNumber && errors.phoneNumber}
                                        onChangeText={handleChange('phoneNumber')}
                                        onBlur={handleBlur('phoneNumber')}
                                        label='PhoneNumber'
                                        placeholder='Enter phone number'
                                    />
                                    <FormInput
                                        value={password}
                                        error={touched.password && errors.password}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        autoCapitalize='none'
                                        secureTextEntry
                                        label='Password'
                                        placeholder='********'
                                    />
                                    <FormInput
                                        value={confirmPassword}
                                        error={touched.confirmPassword && errors.confirmPassword}
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={handleBlur('confirmPassword')}
                                        autoCapitalize='none'
                                        secureTextEntry
                                        label='Confirm Password'
                                        placeholder='********'
                                    />
                                    <FormSubmitButton
                                        submitting={isSubmitting}
                                        onPress={handleSubmit}
                                        title='Sign up'
                                    />
                                    <View style={styles.already}>
                                        <Text>Already have an account ? </Text>
                                        <Link href={"signin"} style={{color : "orange"}}> sign in</Link>
                                    </View>

                                </>

                            )
                        }}

                    </Formik>
                </FormContainer>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    topContent : {
        display : "flex",
        justifyContent : "center",
        alignItems :"center",
         gap : 4
    },
    topText :{
        fontSize :40,
        color : 'black'
    },
    subTxt : {
        fontSize : 20,
        color : 'black'
    },
    already : {
        marginTop : 20,
        display : "flex",
        flexDirection : "row",
        justifyContent : "space-between"

    }


})
