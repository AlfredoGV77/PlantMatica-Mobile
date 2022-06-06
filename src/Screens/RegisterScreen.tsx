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
import SelectDropdown from 'react-native-select-dropdown';
import SwitchSelector from 'react-native-switch-selector';
import { AuthContext } from '../context/AuthContext';

const countries = [
    'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
    'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila de Zaragoza',
    'Colima', 'Durango', 'Guanajato', 'Guerrero',
    'Hidalgo', 'Jalisco', 'Estado de México', 'Michoacán de Ocampo',
    'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca',
    'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí',
    'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas',
    'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas',
];

const options = [
    { label: 'Femenino', value: 'Femenino' },
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Prefiero no Decirlo', value: 'Prefiero no Decirlo' },
  ];


export const RegisterScreen = () =>{
    const {signUp} = useContext(AuthContext);


    const {usuario,correo,contraseña,estado,sexo,edad,onChange} = useForm({
        usuario:'',
        correo:'',
        contraseña:'',
        estado:'',
        sexo:'',
        edad:'',
    });

    const onRegister = ()=>{
        console.log(usuario,correo,contraseña,estado,sexo,edad);
        Keyboard.dismiss();
        signUp({usuario:usuario,correo:correo,contraseña:contraseña,estado:estado,sexo:sexo,edad:edad});
    };

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
                            onChangeText={(value)=>onChange(value,'usuario')}
                            value={usuario}
                            onSubmitEditing={onRegister}
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
                            onChangeText={(value)=>onChange(value,'correo')}
                            value={correo}
                            onSubmitEditing={onRegister}
                            autoCapitalize="none"
                            autoCorrect={false}
                            />
                        </View>

                        <View style={styles.ViewInputs}>
                            <Icon name="cake" size={24} color="#0dd76f" />
                            <TextInput style={styles.input}
                            placeholder="Edad"
                            keyboardType="number-pad"
                            placeholderTextColor={'black'}
                            onChangeText={(value)=>onChange(value,'edad')}
                            value={edad}
                            onSubmitEditing={onRegister}
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
                            onChangeText={(value)=>onChange(value,'contraseña')}
                            value={contraseña}
                            onSubmitEditing={onRegister}
                            autoCapitalize="none"
                            autoCorrect={ false }
                            />
                        </View>
                        <View style={styles.ViewInputs}>
                        <Icon name="home" size={24} color="#0dd76f"/>
                        <SelectDropdown
                            data={countries}
                            onSelect={(selectedItem, index) => {
                                onChange(selectedItem,'estado');
                            }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                // text represented after item is selected
                                // if data array is an array of objects then return selectedItem.property to render after item is selected
                                return selectedItem;
                            }}
                            rowTextForSelection={(item, index) => {
                                // text represented for each item in dropdown
                                // if data array is an array of objects then return item.property to represent item in dropdown
                                return item;
                            }}
                            buttonStyle={{...styles.dropdown}}
                            dropdownStyle={{...styles.dropdownX}}
                            defaultButtonText={'Ciudad de México'}
                            buttonTextStyle={{color: 'black',fontSize:16, fontFamily: 'Sans-serif-Roboto'}}
                        />
                        </View>

                        <View style={{...styles.ViewInputs, borderColor: 'white'}}>
                            <SwitchSelector
                                options={options}
                                initial={0}
                                onPress={(value: any) => onChange(value,'sexo')}
                                buttonColor={'#0dd76f'}
                            />
                        </View>


                        {/*Ponemos el boton de INICIAR SESION*/}
                        <View
                            style={{
                            height:100,
                            justifyContent:'center',
                            alignItems:'center',
                            }}>
                        <Pressable style={[styles.button,styles.button_shadow]} onPress={onRegister}>
                            <Text style={styles.text}>Crear Cuenta</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    </>
    );
};


