import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Gravatar from '@krosben/react-native-gravatar';

import styles from './styles';
import Header from '../../components/Header';

const Profile: React.FC = () => {
    const logout = () => {

    }

    const gravatarOptions = {
        email: 'jefe123@gmail.com',
        size: 155
    };

    return (
        <>
            <Header removeIcon title = 'zjefersound'/>
            <View style = { styles.container }>
                <View style = { styles.headerInfo }>
                    <View style = { styles.avatar }>
                        <Gravatar { ...gravatarOptions } />
                    </View>
                    <View style = { styles.numbersInfo }>
                        <View style = { styles.numbersInfoItem }>
                            <Text style = { styles.numbersInfoItemNumber }>
                                15
                            </Text>                            
                            <Text style = { styles.numbersInfoItemLabel }>
                                Posts
                            </Text>                            
                        </View>
                        
                        <View style = { styles.numbersInfoItem }>
                            <Text style = { styles.numbersInfoItemNumber }>
                                442
                            </Text>                            
                            <Text style = { styles.numbersInfoItemLabel }>
                                Seguidores
                            </Text>                            
                        </View>

                        <View style = { styles.numbersInfoItem }>
                            <Text style = { styles.numbersInfoItemNumber }>
                                469
                            </Text>                            
                            <Text style = { styles.numbersInfoItemLabel }>
                                Seguindo
                            </Text>                            
                        </View>
                    </View>
                </View>
                <View style = { styles.textInfo }>
                    <Text style = { styles.name }>Jeferson Souza</Text>
                    <Text style = { styles.description }>
                        asdsadasd sad asd sad sa sadas das dsad sad sad sadsa dsa dsadas sa
                    </Text>
                </View>

                <View style = { styles.posts }>

                </View>

            </View>
        </>
    );
}

export default Profile;
