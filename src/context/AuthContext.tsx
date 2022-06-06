/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable curly */

import React from 'react';
import { createContext, useEffect } from 'react';
import { User, LoginData, RegisterData } from '../interfaces/userInterfaces';
import {useReducer} from 'react';
import { AuthReducer, AuthState } from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps={
    errorMessage:string;
    token:string | null;
    user:User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp:(registerData:RegisterData) => void;
    signIn:(loginData:LoginData) => void;
    logUp:() => void;
    removeError:() => void;
}

const authInitialState:AuthState = {
    status:'checking',
    token:null,
    user:null,
    errorMessage:'',
};


export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}:any)=>{

    const [state,dispatch] = useReducer(AuthReducer,authInitialState);

    useEffect(()=>{
        checkToken();
    },[]);

    const checkToken = async()=>{
        const token = await AsyncStorage.getItem('token');
        //NO HAY TOKEN
        if (!token) return dispatch({type:'notAuthenticated'});
        //Hay token
        const data = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/login/token/${token}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token,
            },
        });

        const resjson2 = await data.json();

        const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/user/${resjson2.id}`, {
            method: 'GET',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token,
            },
        });
        const resjson3 = await res.json();

        if (data.status !== 200){
            return dispatch({type:'notAuthenticated'});
        }
        await AsyncStorage.setItem('token',token);
        dispatch({
            type:'signUp',
            payload:{
                token:token,
                user:resjson3.usuario,
            },
        });
    };



    const signUp = async ({usuario,correo,contraseña,estado,sexo,edad}:RegisterData) => {
        const res = await fetch('https://mmg7n2ixnk.us-east-2.awsapprunner.com/user', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              correo: correo,
              username: usuario,
              password: contraseña,
              estadoMx: 'Tamaulipas',
              sexo: 'Masculino',
              edad: edad,
              rol: 'Usuario',
            }),
          });
          console.log('Hola q hace xdDDDDDDDDDDDDDDDDDDDD',usuario,correo,contraseña,edad);
          console.log(res);
        const resjson = await res.json();
        console.log(resjson);
        if (res.status === 200){
          await AsyncStorage.setItem('token', resjson.token );
        }
        if (res.status !== 200){
            dispatch({
                type:'addError',
                payload:resjson.message,
            });
        }
    };


    const signIn = async({correo,password}:LoginData) => {
            const res = await fetch('https://mmg7n2ixnk.us-east-2.awsapprunner.com/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                correo: correo,
                password: password,
                }),
            });
            const resjson = await res.json();
            console.log(resjson);

            if (res.status === 200){
                dispatch({
                    type:'signUp',
                    payload:{
                        token:resjson.token,
                        user:resjson.user,
                    },
                });
                await AsyncStorage.setItem('token',resjson.token);
                await AsyncStorage.setItem('user',resjson.user);
            }
            if (res.status === 400){
                dispatch({
                    type:'addError',
                    payload:resjson.msg || 'Error al autenticar. Revise su informacion',
                });
            }
    };

    const logUp = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({type:'logout'});
    };
    const removeError = () => {
        dispatch({type:'removeError'});
    };



    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logUp,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    );


};
