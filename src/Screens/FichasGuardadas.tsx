/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable keyword-spacing */

import React, { useContext } from 'react';
import { Alert, Text, TouchableOpacity, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlantGCardStyle } from '../Styles/PlantGCardStyle';
import { usePlantaPaginetedSave } from '../hooks/usePlantaPaginetedSave';
import { PlantaCardGuardada } from '../components/PlantaGuardada';
import { AuthContext } from '../context/AuthContext';
import { SwipeListView } from 'react-native-swipe-list-view';
export const Plantas = () => {
  const{top} = useSafeAreaInsets();
  const{simplePlantaListSave} = usePlantaPaginetedSave();
  const {user,token} = useContext(AuthContext);

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
    Alert.alert(
      'Ficha Eliminada',
      'La ficha se ha eliminado correctamente',
      [
          {                
          text:'Continuar',
          },
      ]
  );
  };


  const renderHiddenItem = (data, rowMap) => (
    <View style={PlantGCardStyle.rowBack}>
        <TouchableOpacity
            style={[PlantGCardStyle.backRightBtn, PlantGCardStyle.backRightBtnRight]}
            onPress={() =>borrarFicha(data.item._id,user?._id,token)}
        >
            <Text style={{color:'white',fontWeight:'bold'}}>Borrar</Text>
        </TouchableOpacity>
    </View>
);


  return(
  <>
    <SwipeListView
      data={simplePlantaListSave}
      keyExtractor={(planta) => planta._id}
      showsVerticalScrollIndicator={false}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-150}

      //Header 
      ListHeaderComponent={(
        <Text style={{
          ...PlantGCardStyle.titulo,
          top:top + 20,
          marginBottom:top + 20,
        }}>Fichas Guardadas</Text>
      )}

      renderItem={({item}) => (<PlantaCardGuardada planta={item}/>)}
    />
  </>
  );
};

export default Plantas;