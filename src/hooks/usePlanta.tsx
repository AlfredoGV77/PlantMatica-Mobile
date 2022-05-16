/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import { PlantaFullInformation } from '../interfaces/plantaInterfaces';
import { plantaApi } from '../api/plantaApi';

export const usePlanta = (_id:string) => {
  const [isLoading,setIsLoading] = useState(true)
  const [Planta,setPlanta] = useState<PlantaFullInformation>()

  const loadPlanta = async() => {
      const resp = await plantaApi.get<PlantaFullInformation>(`https://plantmatica-api.vercel.app/ficha/${ _id }`);
      setPlanta(resp.data);
      setIsLoading(false);
  }

  useEffect(()=>{
    loadPlanta();
  },[])

  return {
      isLoading,
      Planta,
  }

};
