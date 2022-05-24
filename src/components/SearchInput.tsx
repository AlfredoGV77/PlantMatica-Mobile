/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SearchInputStyle } from '../Styles/SearchInputStyle';
import { useState, useEffect } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props{
  onDebounce:(value:string)=>void;
  style?:StyleProp<ViewStyle>;
}

export const SearchInput = ({style,onDebounce}:Props) => {

  const [textValue,setTextValue] = useState('');
  const debouncedValue = useDebouncedValue(textValue);
  useEffect(()=>{
    onDebounce(debouncedValue);
  },[debouncedValue]);

  return (
    <View style={{
      ...SearchInputStyle.container,
      ...style as any,
      }}>
        <View style={{...SearchInputStyle.textBackground}}>
            <TextInput
                placeholder="Buscar Planta"
                placeholderTextColor={'black'}
                style={{...SearchInputStyle.textInput}}
                autoCapitalize="none"
                autoCorrect={false}
                value={textValue}
                onChangeText={setTextValue}
            />
            <Icon
                name="search"
                color="grey"
                size={30}
            />
        </View>
    </View>
  );
};
