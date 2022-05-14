/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import { styleRegister } from '../Styles/RegisterStyle';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const RegisterScreen = () => {
  // ESTE CODIGO ES PARA DEJAR ESPACIO EN CELULARES CON NOTCH
  const { top } = useSafeAreaInsets();
  return (

    <>
      <Image
        source={require('../Recursos/Esquina.png')}
        style={styleRegister.esquina}
      />
      <Text style={{...styleRegister.titulo, top:top + 20}}>Registrate</Text>
    </>
  );
};

export default RegisterScreen;
