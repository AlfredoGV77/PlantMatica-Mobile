/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import { SearchScreen } from '../Screens/SearchScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tab1 } from './Tab1';
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

       {/* Pantalla 1 */}
      <Tab.Screen 
      name="Navigator" 
      component={Tab1} 
      options={{
        tabBarLabel:'Plantas',
        tabBarIcon:({color})=>
        <Icon color={color} 
        size={20} 
        name='home' 
        />
      }}/>


      {/* Pantalla 2 */}
      <Tab.Screen 
      name="SearchScreen" 
      component={SearchScreen} 
      options={{
        tabBarLabel:'Buscar', 
        tabBarIcon:({color})=>
        <Icon color={color} 
        size={20} 
        name='search'/>
      }}/>


    </Tab.Navigator>
  );
};