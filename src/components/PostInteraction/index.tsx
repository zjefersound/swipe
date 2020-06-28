import React from 'react';
import { 
    View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const PostInteraction: React.FC = () => {
    return (
        <View style = { styles.container }>
            <View style = { styles.iconsLeft }>
                <Feather 
                    name = 'heart' 
                    size = {28} 
                    style = { styles.icon } />
                <Feather 
                    name = 'message-circle' 
                    size = {28} 
                    style = { styles.icon } />
                <Feather 
                    name = 'send' 
                    size = {28} 
                    style = { styles.icon } />
            </View>
            <Feather 
                name = 'bookmark' 
                size = {28} 
                style = { styles.iconEnd } />
            
        </View>
    );
}

export default PostInteraction;