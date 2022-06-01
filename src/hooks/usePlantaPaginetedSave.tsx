/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
import { useRef, useEffect, useState, useContext } from 'react';
import { misFichasGuardadas } from '../api/fichasguardadas';
import { plantaApi } from '../api/plantaApi';
import { AuthContext } from '../context/AuthContext';
import { PlantaPaginatedResponse, SimplePlanta, Ficha, PlantaFullInformation } from '../interfaces/plantaInterfaces';


export const usePlantaPaginetedSave = () => {
  const [isLoadingSave, setIsLoadingSave] = useState(true);
  const [simplePlantaListSave,setSimplePlantaListSave]=useState<SimplePlanta[]>([]);
  const [listita,setlistita]=useState<Ficha[]>([]);

  // ESTO ES PA Q NAMAS PA Q SE HAGA UN SCROLL INFINITOo
  const nextPageUrl=useRef('https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha')

  const {user,token} = useContext(AuthContext);

  const traerFichasGuardadas=async()=>{
    const fichasguardadas= await misFichasGuardadas(user?._id,token);
    const FG2= JSON.stringify(fichasguardadas)
    console.log('holis')
    console.log(fichasguardadas[0].fichas_guardadas)
    console.log('holis')
    setlistita(fichasguardadas[0].fichasguardadas);
  }

  const loadFichasSave=async()=>{
    setIsLoadingSave(true);
    mapPlantaList(listita);
  }

  const mapPlantaList=(plantaList:Ficha[])=>{
    console.log(plantaList);
    console.log('SI SE PUDO XD')
    const newPlantaList:SimplePlanta[]=plantaList.map(({_id,nombre_comun,etiquetas,imagen})=>{
      return {
        _id,
        nombre_comun,
        etiquetas,
        imagen,
      }
    });
    setSimplePlantaListSave([...simplePlantaListSave,...newPlantaList]);
    setIsLoadingSave(false);
  }

  useEffect(()=>{
    loadFichasSave();
    traerFichasGuardadas();
    },[]);

  return {
    isLoadingSave,
    simplePlantaListSave,
    loadFichasSave,
  };

  
}
