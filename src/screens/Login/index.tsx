import React, { useState } from 'react';
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,

} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
const icon = require("../../assets/imgs/swipe.png");

import AuthInput from '../../components/AuthInput';

interface LoginProps {
    email?: string;
    password?: string;
    navigation?: any;
}

const Login: React.FC<LoginProps> = ( props ) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const login = () => {
        props.navigation.navigate('Profile');
    }

    return (
        <View style = { styles.container }>
            <Image source = { icon } style = { styles.icon } />
            <Text style = { styles.iconLabel }>Swipeit</Text>
            <AuthInput 
                name = 'mail'
                placeholder = 'Email'  
                autoFocus
                keyboardType = 'email-address'
                value = { email }
                onChangeText = { text => setEmail(text)}
            />
            <AuthInput 
                name = 'key'
                placeholder = 'Password'  
                secureTextEntry
                value = { password }
                onChangeText = { text => setPassword(text)}
            />
            <TouchableOpacity 
                activeOpacity = {0.7}
                onPress = { login }
            >
                <View style = { styles.button }>
                    <Feather name = 'log-in' style = { styles.buttonIcon }/>
                    <Text style = { styles.buttonText }>Entrar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style = { styles.register }>
                    Nao tem conta? <Text style = { styles.registerColor }>
                        Cadastre-se </Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
