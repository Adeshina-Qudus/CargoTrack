
import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
import { isValidEmail, isValidObjField, updateError } from '../utils/methods';
import FormContainer from '../../components/FormContainer'
import FormInput from '../../components/FormInput';
import FormSubmitButton from '../../components/FormSubmitButton';
   export default function SignIn(){
        const [userInfo, setUserInfo] = useState({
            email: '',
            password: '',
        });

        const [error, setError] = useState('');

        const { email, password } = userInfo;

        const handleOnChangeText = (value, fieldName) => {
            setUserInfo({ ...userInfo, [fieldName]: value });
        };

        const isValidForm = () => {
            if (!isValidObjField(userInfo))
                return updateError('Required all fields!', setError);

            if (!isValidEmail(email)) return updateError('Invalid email!', setError);

            if (!password.trim() || password.length < 8)
                return updateError('Password is too short!', setError);

            return true;
        };
        const submitForm = async () => {

        };

        return (
             <SafeAreaView>
                 <View style={styles.topContent}>
                     <Text style={styles.topText}> Login Here  </Text>
                     <Text style={styles.subTxt}>Welcome back</Text>
                 </View>
                <FormContainer>
                    {error ? (
                        <Text style={{ color: 'red', fontSize: 18, textAlign: 'center' }}>
                            {error}
                        </Text>
                    ) : null}
                    <FormInput
                        value={email}
                        onChangeText={value => handleOnChangeText(value, 'email')}
                        label='Email'
                        placeholder='example@email.com'
                        autoCapitalize='none'
                    />
                    <FormInput
                        value={password}
                        onChangeText={value => handleOnChangeText(value, 'password')}
                        label='Password'
                        placeholder='********'
                        autoCapitalize='none'
                        secureTextEntry
                    />
                    <FormSubmitButton onPress={submitForm} title='Login' />
                </FormContainer>
             </SafeAreaView>
        );
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

})