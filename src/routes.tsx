import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppScreen from './navigators/AppScreen';

const Stack = createStackNavigator();

import LoginOrRegisterScreen from './navigators/LoginOrRegisterScreen';

const Routes = () => {
    return (
        <>
            <NavigationContainer >
                <Stack.Navigator headerMode = 'none'
                    initialRouteName = 'Login'>
                    <Stack.Screen name="App" component={AppScreen} />
                    <Stack.Screen name="Login" component={LoginOrRegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

export default Routes;