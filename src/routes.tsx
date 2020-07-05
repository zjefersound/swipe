import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';

import colors from './configs/colors';
import Feed from './screens/Feed';
import AddPost from './screens/AddPost';
import Profile from './screens/Profile';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const LoginOrProfileScreen = () => {
    return (
        <Stack.Navigator headerMode = 'none'
            initialRouteName = 'Login'>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}

const Routes = () => {
    return (
        <>
        <NavigationContainer >
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
                    component={LoginOrProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color }) => (
                            <Feather name="circle" color={color} size={28} />
                        ),
                    }}
                />
                
            </Tab.Navigator>
        </NavigationContainer>

        </>
    );
}

export default Routes;