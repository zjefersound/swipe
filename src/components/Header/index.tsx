import React from 'react';
import { 
    View,
    Text,
    Image, 
} from 'react-native';

import styles from './styles';
const icon = require("../../assets/imgs/swipe.png");

interface HeaderProps {
    removeIcon?: boolean;
    title: string;
}
const Header: React.FC<HeaderProps> = ({removeIcon = false, title}) => {
    
    return (
        <View style = { styles.container }>
            <View style = { styles.containerRow }>
                {!removeIcon &&
                    <Image source = {icon} style = { styles.icon }/>
                }
                <Text style = { styles.title }>{title}</Text>
            </View>
        </View>
    );
}

export default Header;