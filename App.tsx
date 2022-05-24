/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
// import {Navigator} from './src/navigation/Navigator';
import { Tabs } from './src/navigation/Tabs';
import { NavigatorMain } from './src/navigation/NavigatorMain';
import { AuthProvider } from './src/context/AuthContext';


const AppState = ({children}:{children:JSX.Element | JSX.Element[]})=>{
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
};

export const App = () => {
   return (
      <NavigationContainer>
          {/* <Tabs/> */}
          {/* <TabLogin/> */}
          <AppState>
            <NavigatorMain/>
          </AppState> 
      </NavigationContainer>
  );
};

export default App;