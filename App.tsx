/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
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
          <AppState>
            <NavigatorMain/>
          </AppState> 
      </NavigationContainer>
  );
};

export default App;