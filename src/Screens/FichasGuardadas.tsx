/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlantGCardStyle } from '../Styles/PlantGCardStyle';
import { usePlantaPaginetedSave } from '../hooks/usePlantaPaginetedSave';
import { PlantaCardGuardada } from '../components/PlantaGuardada';
export const Plantas = () => {
  const{top} = useSafeAreaInsets();
  const{simplePlantaListSave} = usePlantaPaginetedSave();
  return(
  <>
    <FlatList
      data={simplePlantaListSave}
      keyExtractor={(planta) => planta._id}
      showsVerticalScrollIndicator={false}

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