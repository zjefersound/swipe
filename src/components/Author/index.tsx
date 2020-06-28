import React from 'react';
import { View, Text } from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';

import styles from './styles';

interface AuthorProps {
    nickname: string;
    email: string;
}

const Author: React.FC<AuthorProps> = ({ nickname, email }) => {
    return(
        <View style = { styles.container }>
            <Gravatar 
                size = {72}
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