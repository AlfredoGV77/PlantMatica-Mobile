/* eslint-disable prettier/prettier */

export interface LoginData{
  correo:string,
  password:string,
}

export interface User {
  id:string,
  username: string;
  correo: string;
  imagen: string;
  password:string;
  estadoMx:string;
  sexo:string;
  edad:number;
  code:string;
  status:string;
  state:boolean;
  rol:string;
  fichas_guardadas:any[];
  reportes:any[];
}

export interface LoginResponse{
  usuario:User;
  token:string;
  id:    string;
}


