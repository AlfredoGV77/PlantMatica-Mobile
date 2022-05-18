/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, FlatList, Text, View, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PlantaCard } from '../components/PlantaCard';
import { SearchInput } from '../components/SearchInput';
import { usePlantaSearch } from '../hooks/usePlantaSearch';
import { SearchInputStyle } from '../Styles/SearchInputStyle';
import { PlantCardStyle } from '../Styles/PlantCardStyle';
import { Loading } from '../components/Loading';

export const SearchScreen = () => {

  const {top} = useSafeAreaInsets();
  const {isFetching, simplePlantaList} = usePlantaSearch();

  if (isFetching){
    return <Loading/>;
  }

  return (
    <View style={{
      flex:1,
    }}
    >
      <SearchInput
        style={{
          position:'absolute',
          zIndex:999,
          width:Dimensions.get('window').width - 5,
          top:top + 30,
        }}
      />
      <FlatList
        data={simplePlantaList}
        keyExtractor={(planta) => planta._id}
        showsVerticalScrollIndicator={false}
        numColumns={2}

        //Header
        ListHeaderComponent={(
          <Text style={{
            ...PlantCardStyle.titulo,
            marginTop:top + 70,

          }}>PlantMatica</Text>
        )}

        renderItem={({item}) => (<PlantaCard planta={item}/>)}
    />
    </View>
  );
};
