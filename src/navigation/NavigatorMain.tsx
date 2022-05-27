/* eslint-disable prettier/prettier */
/* eslint-disable curly */
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens/LoginScreen';
import { RegisterScreen } from '../Screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { Tabs } from './Tabs';
import { LoadingScreen } from '../Screens/LoadingScreen';

const Stack = createStackNavigator();

export const NavigatorMain = () => {

  const {status} = useContext(AuthContext);

  if (status === 'checking') return <LoadingScreen/>;

  return (
      <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#ffffff' },
        }}
      >

        {(status !== 'authenticated')
          ? (
            <>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen}/>
            </>
            )
          : (<Stack.Screen name="Tabs" component={Tabs}/>)
        }

      </Stack.Navigator>
  );
};
