/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  Image,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../Styles/Login';


//ESTA CLASE ES UNICAMENTE PARA HACER LA VISTA GRAFICA DE LA APP
export const LoginScreen = ({}) => {
  // const onSubmit = async data =>{
  //   const res = await fetch('https://plantmatica-api.vercel.app/login',{
  //     method:'POST',
  //     mode:'cors',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //   });
  // };
    const [usuario,setusuario] = useState('');
    const [password,setPassword] = useState('');

  return (
    //Iniciamos nuestro container
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      {/*Creamos el codigo para la imagen de fondo*/}
      <ImageBackground
        source={require('../Recursos/FondoLogin.png')}
        style={{
          /*Esta bien bonita esta funcion, pues toma las dimensiones de la pantalla y ya con ello saca una proporcion*/
          height: Dimensions.get('window').height / 2,
        }}>
        <View style={styles.brandView}>
          {/*Creamos el codigo para el icono de la aplicacion*/}
          <Image
            source={require('../Recursos/Icono.png')}
            style={{
              width: Dimensions.get('window').width / 2,
              height: Dimensions.get('window').height / 4,
            }}
          />
          {/*Creamos el codigo para el titulo de la aplicacion*/}
          <Text style={styles.brandViewText}>PlantMatica</Text>
        </View>
      </ImageBackground>
      {/*Termino la parte de arriba, ahora seguimos con la parte inferior y los botones etc*/}
      <View style={styles.bottomView}>
        {/*BIENVENIDA*/}
        <View style={{padding: 40}}>
          <Text style={{color: '#0dd76f', fontSize: 35}}>Bienvenido</Text>
          <Text style={{color: 'black'}}>
            ¿No tienes una Cuenta?
          </Text>
          {/*Pondremos los inputs*/}
          <View style={styles.ViewInputs}>
            <Icon name="face" size={24} color="#0dd76f" />
            <TextInput style={styles.input}
            placeholder="Usuario"
            placeholderTextColor={'black'}
            value={usuario}
            onChangeText={(text) => setusuario(text)}
            />
          </View>

          <View style={styles.ViewInputs}>
            <Icon name="security" size={24} color="#0dd76f"/>
            <TextInput style={styles.input}
             placeholder="Contraseña"
            placeholderTextColor={'black'}
            secureTextEntry={true}
            editable={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
          </View>
          {/*Ponemos el boton de INICIAR SESION*/}
          <View
            style={{
              height:100,
              justifyContent:'center',
              alignItems:'center',
            }}>
          <Pressable style={[styles.button,styles.button_shadow]} onPress={() => Alert.alert('Button Pressed!')}>
            <Text style={styles.text}>Iniciar Sesion</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

