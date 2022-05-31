/* eslint-disable prettier/prettier */
import {RootStackParams} from './Tab1';
import React from 'react';
import { SearchScreen } from '../Screens/SearchScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { DetallePlanta } from '../Screens/DetallePlanta';
import FichasGuardadas from '../Screens/FichasGuardadas';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab2.Screen name="Plantas" component={SearchScreen}/>
      <Tab2.Screen name="DetallePlanta" component={DetallePlanta}/>
      <Tab2.Screen name="PlantasGuardadas" component={FichasGuardadas}/>
    </Tab2.Navigator>
  );
};
