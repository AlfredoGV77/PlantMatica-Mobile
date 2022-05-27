/* eslint-disable prettier/prettier */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../context/AuthContext';
import { ProfileStyle } from '../Styles/ProfileStyle';
export const DatosUser = () => {

    const {user,token,logUp} = useContext(AuthContext);
    const {top} = useSafeAreaInsets();
    const [bgcolor,setBgColor] = useState('green');
    const isMounted = useRef(true);

    const img = user.fotoPerfil;

    useEffect(()=>{
        ImageColors.getColors(img,{fallback:'#72cb10'})
         .then(colors => {
             if (!isMounted.current) return;
             (colors.platform === 'android')
                ? setBgColor(colors.darkVibrant || '#72cb10')
                : console.log('holixd');
         });
         return ()=>{
             isMounted.current = false;
         };
    },[img]);


  return (


        <View style={{...ProfileStyle.containerImage, backgroundColor:bgcolor}}>
            <Pressable onPress={logUp}>
            <Icon
                style={{position:'absolute', top:top + 30, right:20}}
                name="sign-out"
                color="green"
                size={40} />
            </Pressable>
            <View style={{...ProfileStyle.bottomContainer}}>
                <Image style={{...ProfileStyle.profile}} source={{uri:img}} />
                <Text style={{...ProfileStyle.nombre}}>{user.username}</Text>

                <Text style={{color:'black',bottom:'7%',fontSize:18}}>Correo</Text>
                <Text style={{color:'grey',bottom:'7%',fontSize:18}}>{user.correo}</Text>

                <Text style={{color:'black',bottom:'7%',fontSize:18, marginTop:10}}>Edad</Text>
                <Text style={{color:'black',bottom:'7%',fontSize:18}}>{user.edad}</Text>

                <View style={{flexDirection:'row',bottom:'7%'}}>
                    <View style={{...ProfileStyle.estadoysexo}}>
                      <Text style={{...ProfileStyle.number}}>Estado</Text>
                      <Text style={{...ProfileStyle.numberSecond}}>{user.estadoMx}</Text>
                    </View>
                    <View style={{...ProfileStyle.estadoysexo}}>
                      <Text style={{...ProfileStyle.number}}>Sexo</Text>
                      <Text style={{...ProfileStyle.numberSecond}}>{user.sexo}</Text>
                    </View>
                </View>
            </View>
        </View>



  );
};

