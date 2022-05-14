/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { useRef, useEffect, useState } from 'react';
import { plantaApi } from '../api/plantaApi';
import { PlantaPaginatedResponse, SimplePlanta, Ficha } from '../interfaces/plantaInterfaces';

export const usePlantaPagineted = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePlantaList,setSimplePlantaList]=useState<SimplePlanta[]>([]);
  // ESTO ES PA Q NAMAS PA Q SE HAGA UN SCROLL INFINITO
  const nextPageUrl=useRef('https://plantmatica-api.vercel.app/ficha?limit=40')
  
  const loadFichas=async()=>{
    setIsLoading(true);
    const resp=await plantaApi.get<PlantaPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current=resp.data.next;
    mapPlantaList(resp.data.fichas);

  }

  const mapPlantaList=(plantaList:Ficha[])=>{
    const newPlantaList:SimplePlanta[]=plantaList.map(({_id,nombre_comun,etiquetas})=>{
      const id=_id;
      const nombre=nombre_comun;
      const etiquetasx=etiquetas;
      return {
        _id,
        nombre_comun,
        etiquetas,
      }
    });
    setSimplePlantaList([...simplePlantaList,...newPlantaList]);
    setIsLoading(false);
  }

  useEffect(()=>{
    loadFichas();
    },[])

  return {
    isLoading,
    simplePlantaList,
    loadFichas,
  };

  
}
