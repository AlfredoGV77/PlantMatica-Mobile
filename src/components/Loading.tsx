/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export const Loading = () => {
  return (
    <View style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      }}>
        <ActivityIndicator size={50} color = " green " />
        <Text>Cargando...</Text>
      </View>
  );
};
