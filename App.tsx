/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
// import {Navigator} from './src/navigation/Navigator';
import { Tabs } from './src/navigation/Tabs';


export const App = () => {
   return (
      <NavigationContainer>
          {/* <Navigator/> */}
          <Tabs/>
      </NavigationContainer>
  );
};

export default App;