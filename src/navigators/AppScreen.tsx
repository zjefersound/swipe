import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import Gravatar from '@krosben/react-native-gravatar';

import { connect } from 'react-redux';

import colors from '../configs/colors';
import Feed from '../screens/Feed';
import AddPost from '../screens/AddPost';
import Profile from '../screens/Profile';
import { UserProps, ReducerProps } from '../common/types';

interface AppScreenProps extends UserProps {
    navigation: any;
}

const Tab = createBottomTabNavigator();

const AppScreen = ( props: AppScreenProps ) => {
    const gravatarOptions = {
        email: props.email || 'Anonymous',
        size: 50,
    };
    useEffect(() => {
        if(!props.email || !props.name){
            props.navigation.navigate('Login')
        }
    },[])
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                
                activeTintColor: colors.primary,
                showLabel: false,
                tabStyle: {
                    backgroundColor: colors.secondary
                },
                inactiveTintColor: colors.subText,
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Feed}
                options={{
                    tabBarLabel: 'Add',
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="AddPost"
                component={AddPost}
                options={{
                    tabBarLabel: 'AddPost',
                    tabBarIcon: ({ color }) => (
                        <Feather name="plus-square" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Feed}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color }) => (
                        <Feather name="heart" color={color} size={28} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: () => (
                        <Gravatar {...gravatarOptions}/>
                    ),
                }}
            /> 
        </Tab.Navigator>
    );
}

const mapStateToProps = ({user}: ReducerProps) => {
    return { 
        name: user.name,
        email: user.email
    }
}

export default connect(mapStateToProps)(AppScreen);