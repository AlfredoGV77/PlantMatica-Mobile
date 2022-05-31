/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Tab1 } from './Tab1';
import { Tab2Screen } from './Tab2';
import { Tab3 } from './Tab3';
import { Tab4Screen } from './Tab4';
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
        <Icon color={'green'} 
        size={20} 
        name='home' 
        />
      }}/>


      {/* Pantalla 2 */}
      <Tab.Screen 
      name="SearchScreen" 
      component={Tab2Screen} 
      options={{
        tabBarLabel:'Buscar', 
        tabBarIcon:({color})=>
        <Icon color={'green'} 
        size={20} 
        name='search'/>
      }}/>

      {/* Pantalla 3 */}
      <Tab.Screen 
      name="PlantasGuardadas" 
      component={Tab4Screen} 
      options={{
        tabBarLabel:'Guardadas', 
        tabBarIcon:({color})=>
        <Icon color={'green'} 
        size={20} 
        name='save'/>
      }}/>

      {/* Pantalla 4 */}
      <Tab.Screen 
      name="DatosUser" 
      component={Tab3} 
      options={{
        tabBarLabel:'Usuario', 
        tabBarIcon:({color})=>
        <Icon color={'green'} 
        size={20} 
        name='user'/>
      }}/>


    </Tab.Navigator>
  );
};