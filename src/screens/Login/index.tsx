import React, { useState } from 'react';
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Text,

} from 'react-native';
import { connect } from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
const icon = require("../../assets/imgs/swipe.png");

import AuthInput from '../../components/AuthInput';
import { login } from '../../store/actions/user';

import { UserProps } from '../../common/types';

interface LoginProps {
    name?: string;
    email?: string;
    password?: string;
    navigation?: any;
    onLogin?: any;
}

const Login: React.FC<LoginProps> = ( props ) => {
    const [ name, setName ] = useState('Jeferso');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const login = () => {
        props.onLogin({ name, email, password })
        props.navigation.navigate('App');
    }
    const register = () => {
        props.navigation.navigate('Register');
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

            <TouchableOpacity
                activeOpacity = {0.7}
                onPress = { register }
            >
                <Text style = { styles.register }>
                    Nao tem conta? <Text style = { styles.registerColor }>
                        Cadastre-se </Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onLogin: (user: UserProps) => dispatch(login(user))
    }
}

// export default Login;

export default connect(null, mapDispatchToProps)(Login)
