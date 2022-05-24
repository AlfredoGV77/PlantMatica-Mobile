/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlantaCard } from '../components/PlantaCard';
import { SearchInput } from '../components/SearchInput';
import { usePlantaSearch } from '../hooks/usePlantaSearch';
import { PlantCardStyle } from '../Styles/PlantCardStyle';
import { Loading } from '../components/Loading';
import { SimplePlanta } from '../interfaces/plantaInterfaces';

export const SearchScreen = () => {

  const {top} = useSafeAreaInsets();
  const {isFetching, simplePlantaList} = usePlantaSearch();

  const [plantaFiltered,setplantaFiltered] = useState<SimplePlanta[]>([]);

  const [term,setTerm] = useState('');

  useEffect(()=>{
    if (term.length === 0){
      return setplantaFiltered([]);
    }

    setplantaFiltered(
      simplePlantaList.filter(planta => planta.nombre_comun.includes(term))
    );
    console.log(simplePlantaList.filter(planta => planta.nombre_comun.toLocaleLowerCase().includes(term.toLocaleLowerCase())));

  }, [term]);


  if (isFetching){
    return <Loading />;
  }

  return (
    <View style={{
      flex:1,
    }}
    >
      <SearchInput
        onDebounce={ (value) => setTerm( value )  }
        style={{
          position: 'absolute',
          zIndex: 999,
          width: Dimensions.get('window').width - 5,
          top: top + 30,
        }}/>
      <FlatList
        data={plantaFiltered}
        keyExtractor={(planta) => planta._id}
        showsVerticalScrollIndicator={false}
        numColumns={2}

        //Header
        ListHeaderComponent={(
          <Text style={{
            ...PlantCardStyle.titulo,
            marginTop:top + 70,

          }}>{term}</Text>
        )}

        renderItem={({item}) => (<PlantaCard planta={item}/>)}
    />
    </View>
  );
};
