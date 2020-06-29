import React from 'react';
import { 
    View,
    Text,
    Image, 
} from 'react-native';

import styles from './styles';
const icon = require("../../assets/imgs/swipe.png");

interface HeaderProps {
    title: string;
}
const Header: React.FC = () => {
    
    return (
        <View style = { styles.container }>
            <View style = { styles.containerRow }>
                <Image source = {icon} style = { styles.icon }/>
                <Text style = { styles.title }>Swipeit</Text>
            </View>
        </View>
    );
}

export default Header;