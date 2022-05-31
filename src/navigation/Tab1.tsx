/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Plantas } from '../Screens/Plantas';
import { DetallePlanta } from '../Screens/DetallePlanta';
import { SimplePlanta } from '../interfaces/plantaInterfaces';
import FichasGuardadas from '../Screens/FichasGuardadas';


export type RootStackParams={
  Plantas: undefined;
  DetallePlanta: {simplePlanta:SimplePlanta, color:string};
}

const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Stack.Screen name="Plantas" component={Plantas}/>
      <Stack.Screen name="DetallePlanta" component={DetallePlanta}/>
      <Stack.Screen name="PlantasGuardadas" component={FichasGuardadas}/>

    </Stack.Navigator>
  );
}