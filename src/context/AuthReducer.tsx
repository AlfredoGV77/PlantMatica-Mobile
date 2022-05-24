/* eslint-disable prettier/prettier */
import {User} from '../interfaces/userInterfaces';

/* eslint-disable prettier/prettier */
export interface AuthState{
    status:'checking' | 'authenticated' | 'not-authenticated';
    token:string | null;
    errorMessage:string;
    user:User | null;
}

type AuthAction =
    | {type: 'signUp', payload:{token:string,user:User}}
    | {type: 'addError', payload:string}
    | {type: 'removeError'}
    | {type: 'notAuthenticated'}
    | {type: 'logout'}

export const AuthReducer = (state:AuthState,action:AuthAction):AuthState=>{
    switch (action.type){
        case 'addError':
            return {
                ...state,
                user:null,
                status:'not-authenticated',
                token:null,
                errorMessage:action.payload,
            };
        case 'removeError':
            return {
                ...state,
                errorMessage:'',
            };

        case 'signUp':
            return {
                ...state,
                errorMessage:'',
                status:'authenticated',
                token:action.payload.token,
                user:action.payload.user,
            };
        case 'logout':
        case 'notAuthenticated':
            return {
                ...state,
                errorMessage:'',
                status:'not-authenticated',
                token:null,
                user:null,
            };

        default:
            return state;
    }
};

