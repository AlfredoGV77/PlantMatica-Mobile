/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
import { useRef, useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { SimplePlanta, Ficha } from '../interfaces/plantaInterfaces';


export const usePlantaPaginetedSave = () => {
  const [simplePlantaListSave,setSimplePlantaListSave]=useState<SimplePlanta[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const misFichasGuardadas = async (id_user,tokenxD) => {
    const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/guardadas/${id_user}`, {
      method: 'GET',
      mode: 'cors',
      headers:{
          'Content-Type': 'application/json',
          'x-token': tokenxD!,
      },
  });
  const fichasG = await res.json();
  const holiwis = (fichasG.fichas_guardadas);
  return [holiwis];
};

const borrarFicha = async(id_ficha,id_user,tokens)=>{
  const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/guardadas/delete/${id_ficha}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'x-token': tokens,
      },
      body: JSON.stringify({
          id_user: id_user,
      }),
  });
  const resJSON = await res.json();
};



  // ESTO ES PA Q NAMAS PA Q SE HAGA UN SCROLL INFINITOo

  const {user,token} = useContext(AuthContext);

  const traerFichasGuardadas=async()=>{
    const fichasguardadas= await misFichasGuardadas(user?._id,token);
      setSimplePlantaListSave(fichasguardadas[0].fichas_guardadas);
  }

  useEffect(()=>{
    traerFichasGuardadas();
    },[]);

  return {
    simplePlantaListSave,
  };
}

