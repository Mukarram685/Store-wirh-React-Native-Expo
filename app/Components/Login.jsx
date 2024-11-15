import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; 
import { useNavigation } from 'expo-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [Password, setpassword] = useState('');
    const [error, setError] = useState('');


    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate('Home');
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, Password)
            .then((userSignUp) => {
                const user = userSignUp.user;
                alert("User is registered successfully");
                setEmail('');
                setpassword('');
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
            });
    };

    return (
        <SafeAreaView style={{ flex: 1, margin: 50, alignContent: 'center', justifyContent: 'center' }} >
            <View style={{ gap: 30 }}>
                <Text style={{ fontSize: 30, color: 'skyblue', fontWeight: 'bold' }}>Signup</Text>
                <View>
                    <TextInput
                        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'silver' }}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                    />
                    <TextInput
                        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: 'silver' }}
                        value={Password}
                        onChangeText={setpassword}  // Corrected input handling
                        placeholder='Password'
                        secureTextEntry={true}  // Optional: to hide the password text
                    />
                </View>
                <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Signup</Text>
                </TouchableOpacity>
             <Text style={{ color: 'blue' }}>Login</Text>
                <Text>{error}</Text>
            </View>
        </SafeAreaView>
    );
};

export default Login;
