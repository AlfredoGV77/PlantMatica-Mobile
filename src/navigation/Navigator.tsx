/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import { Plantas } from '../Screens/Plantas';
import { DetallePlanta } from '../Screens/DetallePlanta';
import { SimplePlanta } from '../interfaces/plantaInterfaces';


export type RootStackParams={
  Plantas: undefined;
  DetallePlanta: {simplePlanta:SimplePlanta, color:string};
}
const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      {/* <Stack.Screen name="RegisterScreen" component={RegisterScreen}/> */}
      <Stack.Screen name="Plantas" component={Plantas}/>
      <Stack.Screen name="DetallePlanta" component={DetallePlanta}/>

    </Stack.Navigator>
  );
}