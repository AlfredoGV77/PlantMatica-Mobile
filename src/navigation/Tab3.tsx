/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import { DatosUser } from '../Screens/DatosUser';

export const Tab3 = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="DatosUserxd" component={DatosUser} />
    </Stack.Navigator>
  );
};
