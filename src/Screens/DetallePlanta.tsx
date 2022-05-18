/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */

import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { RootStackParams } from '../navigation/Navigator'
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { DetallePlantaStyle } from '../Styles/DetallePlantaStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePlanta } from '../hooks/usePlanta';
import { PlantaDetails } from '../components/PlantaDetails';


interface Props extends StackScreenProps<RootStackParams,'DetallePlanta'>{};

export const DetallePlanta = ( {navigation,route}:Props) => {
    const{simplePlanta,color} = route.params;
    const{_id,nombre_comun,imagen}=simplePlanta;
    const {top} = useSafeAreaInsets();   

    const{isLoading,Planta} = usePlanta(_id)

    return (
        <View style={{flex:1}}>
            {/* Header Container*/}
            <View style={{
                    ...DetallePlantaStyle.Header,
                    backgroundColor:color,
                }}>

                {/* NUestro backbutoon  */}
                <TouchableOpacity onPress={()=>navigation.pop()} style={{...DetallePlantaStyle.BackButton, top:top}}>
                    <Icon name="arrow-left" color="white" size={35}/>
                </TouchableOpacity>

                {/* Nombre de la Plantita */}
                <View style={{flex:1,justifyContent: 'center',alignItems: 'center',top:90}}>
                <Text adjustsFontSizeToFit={true} numberOfLines={1} style={{...DetallePlantaStyle.Title,top:top+20}}>
                    {nombre_comun}
                </Text>
                </View>
                <View style={{alignItems:'center'}}>
                <Image source={{uri:imagen}} style={{...DetallePlantaStyle.Imagen}}/>
                </View>
            </View>
            {/* Detalles y loading */}
            {
                isLoading ?(
                    <View style={{...DetallePlantaStyle.Loading}}>
                        <ActivityIndicator color={color} size={50}/>
                    </View>
                )
                :<PlantaDetails planta={Planta} color={color}/>
            }


        </View>
    )
}
