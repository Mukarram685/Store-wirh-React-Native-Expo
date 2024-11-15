import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; 
import { useNavigation } from 'expo-router';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  // Updated variable name to lowercase
    const [error, setError] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userSignUp) => {
                const user = userSignUp.user;
                alert("User is registered successfully");
                setEmail('');
                setPassword('');
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
                        value={password}  // Updated variable name
                        onChangeText={setPassword}  // Updated variable name
                        placeholder='Password'
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Signup</Text>
                </TouchableOpacity>
                <Text style={{position: 'relative', bottom: 20, left:3 }}>
                    Already have an account? 
                    <Text style={{ color: 'blue' }} onPress={handleLogin}>Login</Text>
                </Text>
                {/* {error && <Text style={{ color: 'red' }}>{error}</Text>}  Error handling */}
            </View>
        </SafeAreaView>
    );
};

export default Signup;
