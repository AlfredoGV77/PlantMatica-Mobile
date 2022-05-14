/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { Text, useWindowDimensions, View, Dimensions, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePlantaPagineted } from '../hooks/usePlantaPagineted';
import { SimplePlanta } from '../interfaces/plantaInterfaces';
import { PlantCardStyle } from '../Styles/PlantCardStyle';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/core';
import { color } from 'react-native-reanimated';
import { CommonActions } from '@react-navigation/native';


interface Props{
    planta:SimplePlanta;
}

export const PlantaCard = ({planta}:Props) => {
    const ref = React.useRef<FlatList>(null);
    const [index, setIndex] = useState(0);
    const{simplePlantaList, loadFichas} = usePlantaPagineted();
    const[bgcolor,setBgColor] = useState('green');
    const isMounted = useRef(true);
    const navigation = useNavigation();

    
    function getRandomColor() {
        const colores = ['#5ab507','#66c00b','#72cb10','#89d631','#a9e159','#3fc217','#20ae00']
        const num = Math.round(Math.random() * (6 - 0) + 0);
        return colores[num];
    }

    useEffect(()=>{
        ImageColors.getColors('https://laopinion.com/wp-content/uploads/sites/3/2019/12/canva-bugambilias-purple-color.jpg?quality=60&strip=all&w=960&h=640&crop=1',{fallback:'#72cb10'})
         .then(colors => {
             if(isMounted.current) {return;}
             (colors.platform === 'android')
                ? setBgColor(colors.dominant || '#72cb10')
                : console.log('holixd');
         })
         return ()=>{
             isMounted.current = false;
         }
    },[])


    return (
        <TouchableOpacity 
            activeOpacity={0.9}
            onPress={()=>navigation.dispatch(CommonActions.navigate('DetallePlanta',{simplePlanta:planta, color:bgcolor}))}
        >
        <View style={{
                ...PlantCardStyle.cardContainer,
                backgroundColor:bgcolor,
            }}>
        {/* Nombre y etiquetas de la PLanta */}
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
                renderItem={({item})=><Text style={{...PlantCardStyle.etiquetas,width:item.length * 9.5, backgroundColor:getRandomColor()}}>{item}</Text>}
            />
            <Image 
                source={require('../Recursos/TarjetaEsquina.png')}
                style={PlantCardStyle.esquina}
            />
            <FadeInImage
                uri="https://laopinion.com/wp-content/uploads/sites/3/2019/12/canva-bugambilias-purple-color.jpg?quality=60&strip=all&w=960&h=640&crop=1"
                style={PlantCardStyle.imagen}
            />

        </View>
        </TouchableOpacity>
    )
}
