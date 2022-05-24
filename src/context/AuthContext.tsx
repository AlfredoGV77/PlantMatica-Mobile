/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */

import React from 'react';
import {createContext} from 'react';
import { User, LoginData } from '../interfaces/userInterfaces';
import {useReducer} from 'react';
import { AuthReducer, AuthState } from './AuthReducer';


type AuthContextProps={
    errorMessage:string;
    token:string | null;
    user:User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp:() => void;
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

    const signUp = () => {};


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
        dispatch({
            type:'signUp',
            payload:{
                token:resjson.token,
                user:resjson.user,
            },
        });
    };


    const logUp = () => {};
    const removeError = () => {};



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
