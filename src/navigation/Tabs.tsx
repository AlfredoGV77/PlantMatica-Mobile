/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { Navigator } from './Navigator';
import { SearchScreen } from '../Screens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

export const Tabs = () =>{
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor:'white',
      }}
      screenOptions={{
        tabBarActiveTintColor:'green',
        headerShown:false,
        tabBarLabelStyle:{
          marginBottom:10,
        },
        tabBarStyle:{
          borderWidth:0,
          elevation:0,
          position:'absolute',
          backgroundColor:'rgba(255,255,255,0.72)'
        },
      }}

    >
      <Tab.Screen name="Navigator" component={Navigator} 
      options={{
        tabBarLabel:'Plantas', tabBarIcon:({color})=><Icon color={color} size={20} name='home' />
      }}/>
      <Tab.Screen name="SearchScreen" component={SearchScreen} 
      options={{
        tabBarLabel:'Buscar', tabBarIcon:({color})=><Icon color={color} size={20} name='search'/>
      }}/>
    </Tab.Navigator>
  );
};