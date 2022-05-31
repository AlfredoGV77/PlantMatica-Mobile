/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */


import React, { useContext } from 'react';
import { Image, FlatList, Text, ActivityIndicator, View } from 'react-native';
import { styleRegister } from '../Styles/RegisterStyle';
import { usePlantaPagineted } from '../hooks/usePlantaPagineted';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlantaCard } from '../components/PlantaCard';
import { PlantCardStyle } from '../Styles/PlantCardStyle';


export const Plantas = () => {

  const{top} = useSafeAreaInsets();
  const{simplePlantaList, loadFichas} = usePlantaPagineted();
  return(
  <>
   <Image
        source={require('../Recursos/Esquina.png')}
        style={styleRegister.esquina}
    />

    <View 
      style={{...PlantCardStyle.view}}
    >

    <FlatList
      data={simplePlantaList}
      keyExtractor={(planta) => planta._id}
      showsVerticalScrollIndicator={false}
      numColumns={2}

      //Header 
      ListHeaderComponent={(
        <>
        <Text style={{
          ...PlantCardStyle.titulo,
          top: top + 20,
          marginBottom: top + 20}}>
            PlantMatica
        </Text>
          </>
      )}

      renderItem={({item}) => (<PlantaCard planta={item}/>)}

      //SCROLL INFINITO
      onEndReached={loadFichas}
      onEndReachedThreshold={0.4}
      ListFooterComponent={(
        <ActivityIndicator 
          style={{height:100}}
          size={20}
          color="green"
          />
      )}
    />
    </View>

  </>
  );
};

export default Plantas;