/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { plantaApi } from '../api/plantaApi';
import { PlantaPaginatedResponse, SimplePlanta, Ficha } from '../interfaces/plantaInterfaces';

export const usePlantaSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePlantaList,setSimplePlantaList] = useState<SimplePlanta[]>([]);
  
  const loadFichas = async()=>{
    const resp = await plantaApi.get<PlantaPaginatedResponse>('https://plantmatica-api.vercel.app/ficha');
    mapPlantaList(resp.data.fichas);
  };

  const mapPlantaList = (plantaList:Ficha[])=>{
    const newPlantaList:SimplePlanta[] = plantaList.map(({_id,nombre_comun,etiquetas,imagen})=>{
      return {
        _id,
        nombre_comun,
        etiquetas,
        imagen,
      };
    });
    setSimplePlantaList(newPlantaList);
    setIsFetching(false);
  };

  useEffect(()=>{
    loadFichas();
    },[]);

  return {
    isFetching,
    simplePlantaList,
  };

  
};
