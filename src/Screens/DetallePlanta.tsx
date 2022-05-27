/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-extra-semi */
/* eslint-disable space-infix-ops */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */

import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { RootStackParams } from '../navigation/Tab1'
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { DetallePlantaStyle } from '../Styles/DetallePlantaStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePlanta } from '../hooks/usePlanta';
import { PlantaDetails } from '../components/PlantaDetails';
import { AuthContext } from '../context/AuthContext';
import { LoadingFicha } from '../interfaces/userInterfaces';


interface Props extends StackScreenProps<RootStackParams,'DetallePlanta'>{};

export const DetallePlanta = ( {navigation,route}:Props) => {
    const{simplePlanta,color} = route.params;
    const{_id,nombre_comun,imagen}=simplePlanta;
    const {top} = useSafeAreaInsets();   

    const{isLoading,Planta} = usePlanta(_id)

    const {user,token} = useContext(AuthContext);
    const id_user = user.id;

    const id_ficha=_id;
    console.log('ALONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE'+user._id)
    const guardarFicha = async ({id_ficha, id_user, token}:LoadingFicha) => {
        console.log('hola si entre xddd')
        const res = await fetch(`https://mmg7n2ixnk.us-east-2.awsapprunner.com/ficha/guardar/${id_ficha}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token,
            },
            body: JSON.stringify({
                id_user,
            }),
        });
        const resJSON = await res.json();
        console.log('aloneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'+resJSON);
        return resJSON;
    
    }



    return (
        <View style={{flex:1}}>
            {/* Header Container*/}
            <View style={{
                    ...DetallePlantaStyle.Header,
                    backgroundColor:color,
                }}>

                {/* NUestro backbutoon  */}
                <TouchableOpacity onPress={guardarFicha} style={{...DetallePlantaStyle.StarButton, top:top+20}}>
                    <Icon name="star" color="white" size={35}/>
                </TouchableOpacity>

                {/* Pa guardar la ficha en favs  */}
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
