/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */


import React, { useContext, useState } from 'react';
import { Image, FlatList, Text, ActivityIndicator, View } from 'react-native';
import { styleRegister } from '../Styles/RegisterStyle';
import { usePlantaPaginetedSave } from '../hooks/usePlantaPaginetedSave';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlantaCard } from '../components/PlantaCard';
import { PlantCardStyle } from '../Styles/PlantCardStyle';
import { AuthContext } from '../context/AuthContext';
import { Ficha } from '../interfaces/plantaInterfaces';


export const FichasGuardadas = () => {

  const{top} = useSafeAreaInsets();
  const{simplePlantaListSave, loadFichasSave} = usePlantaPaginetedSave();

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
      data={simplePlantaListSave}
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
            Fichas Guardadas
        </Text>
          </>
      )}

      renderItem={({item}) => (<PlantaCard planta={item}/>)}

      //SCROLL INFINITO
      onEndReached={loadFichasSave}
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

export default FichasGuardadas;