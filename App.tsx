/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  Pressable,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

//ESTA CLASE ES UNICAMENTE PARA HACER LA VISTA GRAFICA DE LA APP
export const LoginScreen = ({}) => {
  return (
    //Iniciamos nuestro container
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      {/*Creamos el codigo para la imagen de fondo*/}
      <ImageBackground
        source={require('./App/Recursos/FondoLogin.png')}
        style={{
          /*Esta bien bonita esta funcion, pues toma las dimensiones de la pantalla y ya con ello saca una proporcion*/
          height: Dimensions.get('window').height / 2,
        }}>
        <View style={styles.brandView}>
          {/*Creamos el codigo para el icono de la aplicacion*/}
          <Image
            source={require('./App/Recursos/Icono.png')}
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
            <Text style={{color: 'red', fontStyle: 'italic'}}> Registrate</Text>
          </Text>
          {/*Pondremos los inputs*/}
          <View style={styles.ViewInputs}>
            <Icon name="face" size={24} color="#0dd76f" />
            <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor={'black'} />
          </View>

          <View style={styles.ViewInputs}>
            <Icon name="security" size={24} color="#0dd76f"/>
            <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor={'black'} secureTextEntry={true} />
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

//CON ESTO HAREMOS NUESTROS ESTILOS. ESTO PARA QUE SE VEAN BONITOS. DIGAMOS Q CREAMOS UN ARREGLO Y CADA ELEMENTO ES UN ESTILO
//Cuando lo llamemos ponemos styles.nombreDeLaVariable
const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    fontSize:20,
    fontFamily: 'Sans-serif-Roboto',
    color:'#ffffff',
  },
  brandViewText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: 'Sans-serif-Roboto',
  },
  //ES LA BARRITA QUE SEPARARA EL LOGO CON LOS BOTONES
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  ViewInputs: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 2,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#0dd76f',
    borderRadius: 23,
    paddingHorizontal: 10,
  },
  input: {
    paddingHorizontal: 10,
    height: 40, 
    width: '90%',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#0dd76f',
    width: Dimensions.get('window').width / 1.3,
    justifyContent: 'center',
    height:Dimensions.get('window').height / 15,
    borderRadius: 23,
    alignItems: 'center',
  },
  button_shadow: {
    shadowOffset: {width:1,height:10},
    shadowOpacity: 90.2,
    shadowRadius: 5,
    elevation:25,
    shadowColor: 'green',
  },
});
