/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigation/Navigator';
import { Text, View } from 'react-native';

export const App = () => {
   return (
      <NavigationContainer>
          <Navigator/>
      </NavigationContainer>
  );
};

export default App;