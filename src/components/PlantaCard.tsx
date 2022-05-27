/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable semi */

import { Text, View, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePlanta } from '../interfaces/plantaInterfaces';
import { PlantCardStyle } from '../Styles/PlantCardStyle';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import { FadeInImage } from './FadeInImage';


interface Props{
    planta:SimplePlanta;
}

export const PlantaCard = ({planta}:Props) => {
    const ref = React.useRef<FlatList>(null);
    const [index, setIndex] = useState(0);
    const[bgcolor,setBgColor] = useState('green');
    const isMounted = useRef(true);
    const navigation = useNavigation();

    useEffect(()=>{
        ImageColors.getColors(planta.imagen,{fallback:'#72cb10'})
         .then(colors => {
             if(!isMounted.current) return;
             (colors.platform === 'android')
                ? setBgColor(colors.vibrant || '#72cb10')
                : console.log('holixd');
         })
         return ()=>{
             isMounted.current = false;
         }
    },[planta.imagen])

// holi 
    return (
        <TouchableOpacity 
            activeOpacity={0.9}
            onPress={()=>navigation.dispatch(CommonActions.navigate('DetallePlanta',{simplePlanta:planta, color:bgcolor}))}
        >
        <View style={{
                ...PlantCardStyle.cardContainer,
                backgroundColor:bgcolor,
            }}>
        {/* Nombre y etiquetas de la PLanta xd*/}
        <View>
            <Text style={{...PlantCardStyle.name}}>
                {planta.nombre_comun}
            </Text>
        </View>
            <FlatList
                ref={ref}
                horizontal
                initialScrollIndex={index}
                data={planta.etiquetas.map((item)=>item)}
                renderItem={({item})=><Text style={{...PlantCardStyle.etiquetas,width:item.length * 9.5, backgroundColor:'#3fc217'}}>{item}</Text>}
            />
            <Image 
                source={require('../Recursos/TarjetaEsquina.png')}
                style={PlantCardStyle.esquina}
            />
            <FadeInImage
                uri={planta.imagen}
                style={PlantCardStyle.imagen}
            />

        </View>
        </TouchableOpacity>
    )
}
