import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/user';

import Gravatar from '@krosben/react-native-gravatar';

import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Header from '../../components/Header';

import { UserProps, ReducerProps } from '../../common/types';

interface ProfileProps extends UserProps {
    navigation: any;
    onLogout: Function;
}

const Profile: React.FC<ProfileProps> = (props) => {
    const logout = () => {
        props.onLogout();
        props.navigation.navigate('Login');
    }
    const edit = () => {
        console.log('editou');
    }

    const gravatarOptions = {
        email: props.email || '',
        size: 155
    };

    return (
        <>
            <Header removeIcon title = 'zjefersound' menuFunction = { () => { console.log('vapo vapo')}}/>
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
                    <Text style = { styles.name }>{props.name}</Text>
                    <Text style = { styles.description }>
                        asdsadasd sad asd sad sa sadas das dsad sad sad sadsa dsa dsadas sa
                    </Text>
                </View>
                
                <View style = { styles.buttonsBar }>
                    <TouchableOpacity onPress = { edit } activeOpacity = {0.7} >
                        <View style = { styles.buttonAction }>
                            <Feather 
                                name = 'plus' 
                                size = {14} 
                                style = { styles.buttonEditText }
                            />
                            <Text style = { [styles.buttonActionLabel, styles.buttonEditText] }>
                                Editar perfil
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = { logout } activeOpacity = {0.7}>
                        <View style = { styles.buttonAction }>
                            <Feather 
                                name = 'log-out' 
                                size = {14}
                                style = { styles.buttonLogoutText } 
                            />
                            <Text style = { [styles.buttonActionLabel, styles.buttonLogoutText] }>
                                Log out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <View style = { styles.postList }>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                        <View style = { styles.postImage }>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    );
}

const mapStateToProps = ({user}: ReducerProps) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchProps = (dispatch: Function) => {
    return {
        onLogout: () => dispatch(logout())
    }
}

// export default Profile;

export default connect(mapStateToProps, mapDispatchProps)(Profile);