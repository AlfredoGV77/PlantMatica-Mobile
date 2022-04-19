/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>

    </Stack.Navigator>
  );
}