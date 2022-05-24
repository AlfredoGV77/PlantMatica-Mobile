/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { createContext, useContext, useReducer, useState } from 'react';
import { Dimensions, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { LoginData, User } from '../interfaces/userInterfaces';
import { styles } from '../Styles/LoginStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Estados = [
    {
        estado:'Aguascalientes',
        id:1,
    },
    {
        estado:'Baja California',
        id:2,
    },
    {
        estado:'Baja California Sur',
        id:3,
    },
    {
        estado:'Campeche',
        id:4,
    },
    {
        estado:'Chiapas',
        id:5,
    },
    {
        estado:'Chihuahua',
        id:6,
    },
    {
        estado:'Ciudad de México',
        id:7,
    },
    {
        estado:'Coahuila de Zaragoza',
        id:8,
    },
    {
        estado:'Colima',
        id:9,
    },
    {
        estado:'Durango',
        id:10,
    },
    {
        estado:'Guanajato',
        id:11,
    },
    {
        estado:'Guerrero',
        id:12,
    },
    {
        estado:'Hidalgo',
        id:13,
    },
    {
        estado:'Jalisco',
        id:14,
    },
    {
        estado:'Estado de México',
        id:15,
    },
    {
        estado:'Michoacán de Ocampo',
        id:16,
    },
    {
        estado:'Morelos',
        id:17,
    },
    {
        estado:'Nayarit',
        id:18,
    },
    {
        estado:'Nuevo León',
        id:19,
    },
    {
        estado:'Oaxaca',
        id:20,
    },
    {
        estado:'Puebla',
        id:21,
    },
    {
        estado:'Querétaro',
        id:22,
    },
    {
        estado:'Quintana Roo',
        id:23,
    },
    {
        estado:'San Luis Potosí	',
        id:24,
    },
    {
        estado:'Sinaloa',
        id:25,
    },
    {
        estado:'Sonora',
        id:26,
    },
    {
        estado:'Tabasco',
        id:27,
    },
    {
        estado:'Tamaulipas',
        id:28,
    },
    {
        estado:'Tlaxcala',
        id:29,
    },
    {
        estado:'Veracruz',
        id:30,
    },
    {
        estado:'Yucatán',
        id:31,
    },
    {
        estado:'Zacatecas',
        id:32,
    },

];


export const RegisterScreen = () =>{


  return (
    <>
        <KeyboardAvoidingView
            style={{ flex:1 }}
            behavior="height"
        >
            <ScrollView
                style={{flex: 1, backgroundColor: '#ffffff'}}
                showsVerticalScrollIndicator={false}>
                {/*Creamos el codigo para la imagen de fondo*/}
                <ImageBackground
                    source={require('../Recursos/FondoLogin.png')}
                    style={{
                    /*Esta bien bonita esta funcion, pues toma las dimensiones de la pantalla y ya con ello saca una proporcion*/
                    height: Dimensions.get('window').height / 4,
                    }}>
                    <View style={styles.brandView}>
                    {/*Creamos el codigo para el icono de la aplicacion*/}
                    {/*Creamos el codigo para el titulo de la aplicacion*/}
                    <Text style={{fontSize:40,color:'white',fontFamily:'Sans-serif-Roboto',fontWeight:'bold'}}>PlantMatica</Text>
                    <Text style={{fontSize:15,color:'white',fontFamily:'Sans-serif-Roboto',fontWeight:'bold'}}>Tucan's Software</Text>
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
                            // onChangeText={(value)=>onChange(value,'usuario')}
                            // value={usuario}
                            // onSubmitEditing={onLogin}
                            autoCapitalize="none"
                            autoCorrect={false}
                            />
                        </View>

                        <View style={styles.ViewInputs}>
                            <Icon name="face" size={24} color="#0dd76f" />
                            <TextInput style={styles.input}
                            placeholder="Correo"
                            keyboardType="email-address"
                            placeholderTextColor={'black'}
                            // onChangeText={(value)=>onChange(value,'email')}
                            // value={email}
                            // onSubmitEditing={onLogin}
                            autoCapitalize="none"
                            autoCorrect={false}
                            />
                        </View>

                        <View style={styles.ViewInputs}>
                            <Icon name="security" size={24} color="#0dd76f"/>
                            <TextInput style={styles.input}
                            placeholder="*******"
                            placeholderTextColor={'black'}
                            editable={true}
                            secureTextEntry={true}
                            // onChangeText={(value)=>onChange(value,'password')}
                            // value={password}
                            // onSubmitEditing={onLogin}
                            autoCapitalize="none"
                            autoCorrect={ false }
                            />
                        </View>


                        {/*Ponemos el boton de INICIAR SESION*/}
                        <View
                            style={{
                            height:100,
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                        {/* <Pressable style={[styles.button,styles.button_shadow]} onPress={onLogin}>
                            <Text style={styles.text}>Iniciar Sesion</Text>
                        </Pressable> */}
                        </View>
                    </View>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    </>
    );
};


