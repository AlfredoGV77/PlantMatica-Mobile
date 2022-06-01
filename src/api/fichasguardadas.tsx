/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SimplePlanta } from '../interfaces/plantaInterfaces';



    export const misFichasGuardadas = async (id_user,tokenxD) => {
        const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/guardadas/${id_user}`, {
          method: 'GET',
          mode: 'cors',
          headers:{
              'Content-Type': 'application/json',
              'x-token': tokenxD!,
          },
      });
      const fichas = await res.json();
      const holiwis = (fichas.fichas_guardadas);
      return [holiwis];
  };

