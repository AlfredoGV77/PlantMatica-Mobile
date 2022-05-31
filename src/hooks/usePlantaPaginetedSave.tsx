/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
import { useRef, useEffect, useState, useContext } from 'react';
import { plantaApi } from '../api/plantaApi';
import { AuthContext } from '../context/AuthContext';
import { PlantaPaginatedResponse, SimplePlanta, Ficha, PlantaFullInformation } from '../interfaces/plantaInterfaces';

export const usePlantaPaginetedSave = () => {
  const [isLoadingSave, setIsLoadingSave] = useState(true);
  const [simplePlantaListSave,setSimplePlantaListSave]=useState<SimplePlanta[]>([]);
  const [listita,setlistita]=useState<Ficha[]>([]);

  // ESTO ES PA Q NAMAS PA Q SE HAGA UN SCROLL INFINITO
  const nextPageUrl=useRef('https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha')

  const {user,token} = useContext(AuthContext);
  
  const misFichasGuardadas = async (id_user,tokenxD) => {
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/guardadas/${id_user}`, {
        method: 'GET',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json',
            'x-token': tokenxD!,
        },
    })
    const data= await res.json();
    setlistita(data.fichas_guardadas);

}
  // console.log(listita);

  const loadFichasSave=async()=>{
    setIsLoadingSave(true);
    mapPlantaList(listita);

  }

  const mapPlantaList=(plantaList:Ficha[])=>{
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
    },[])

  return {
    isLoadingSave,
    simplePlantaListSave,
    loadFichasSave,
  };

  
}
