import React from 'react';
import { 
    View,
    Text,
    Image,
    TouchableOpacity, 
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';
const icon = require("../../assets/imgs/swipe.png");

interface HeaderProps {
    removeIcon?: boolean;
    title: string;
    menuFunction?: Function;
}
const Header: React.FC<HeaderProps> = ({removeIcon = false, title, menuFunction}) => {
    
    return (
        <View style = { styles.container }>
            <View style = { styles.containerRow }>
                {!removeIcon &&
                    <Image source = {icon} style = { styles.icon }/>
                }
                <Text style = { styles.title }>{title}</Text>
                
            </View>
            {menuFunction &&
                <TouchableOpacity onPress = { () => menuFunction() }>
                    <Feather name ='menu' size = {28} style = { styles.iconMenu }/>
                </TouchableOpacity>
            }
        </View>
    );
}

export default Header;