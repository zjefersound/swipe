import React from 'react';
import { View, Text } from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';

import styles from './styles';

interface Author {
    nickname: string;
    email: string;
}

const Author: React.FC<Author> = ({ nickname, email }) => {
    return(
        <View style = { styles.container }>
            <Gravatar 
                email = { email } 
                style = { styles.avatar }
            />
            <Text style = { styles.nickname }>
                { nickname }
            </Text>
        </View>
    );
}

export default Author;