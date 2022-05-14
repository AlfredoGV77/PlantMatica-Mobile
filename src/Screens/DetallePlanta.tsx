/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-semi */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { RootStackParams } from '../navigation/Navigator'
import { Text, View } from 'react-native';
import { SimplePlanta } from '../interfaces/plantaInterfaces';
import { DetallePlantaStyle } from '../Styles/DetallePlantaStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props extends StackScreenProps<RootStackParams,'DetallePlanta'>{};

export const DetallePlanta = ( {navigation,route}:Props) => {
    const{simplePlanta,color} = route.params;
    const {top} = useSafeAreaInsets();   
    return (
        <View>
            {/* Header Container*/}
            <View style={{
                    ...DetallePlantaStyle.Header,
                    backgroundColor:color,
                }}> 
                <TouchableOpacity style={{...DetallePlantaStyle.BackButton, top:top + 20}}>
                    <Icon name="home" color="blue" size={35}/>
                </TouchableOpacity>
            </View>          
        </View>
    )
}
