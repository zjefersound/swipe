import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    TextInputProps
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import colors from '../../configs/colors';

interface AuthInputProps extends TextInputProps{
    name: string;
    message?: string;
};
const Login: React.FC<AuthInputProps> = ( props ) => { 
    return (
        <>
        <View style = { [styles.container, props.message ? styles.invalid : null] }>
            <Feather name = { props.name } style = { styles.inputTextIcon }/>
            <TextInput 
                { ...props }
                placeholderTextColor = { colors.subText }
                style = { styles.inputText }
                />
        </View>
        {
            props.message
            ? <Text style = { styles.invalidText }>{props.message}</Text>
            : null
        }
        </>
    );
}

export default Login;
