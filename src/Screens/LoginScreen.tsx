/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Dimensions, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../Styles/LoginStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<any,any> {}

export const LoginScreen = ({navigation}:Props) =>{

    const {signIn} = useContext(AuthContext);

    const {email,password, onChange} = useForm({
        password:'',
        email:'',
    });

    const onLogin = () => {
        console.log('Siii entro, ay diooos mioooooooooooooooooo xd');
        console.log(email);
        Keyboard.dismiss();
        signIn({correo:email,password});
    };


  return (
    <>
        {/* Background */}
        {/* <BackgroundLogin/> */}


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
                            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.replace('RegisterScreen')}>
                                <Text style={{...styles.newUserContainer,marginTop:5,color: 'red', marginLeft:5}}>Registrate</Text>
                            </TouchableOpacity>
                        </Text>
                        {/*Pondremos los inputs*/}
                        <View style={styles.ViewInputs}>
                            <Icon name="face" size={24} color="#0dd76f" />
                            <TextInput style={styles.input}
                            placeholder="Correo"
                            keyboardType="email-address"
                            placeholderTextColor={'black'}
                            onChangeText={(value)=>onChange(value,'email')}
                            value={email}
                            onSubmitEditing={onLogin}
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
                            onChangeText={(value)=>onChange(value,'password')}
                            value={password}
                            onSubmitEditing={onLogin}
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
                        <Pressable style={[styles.button,styles.button_shadow]} onPress={onLogin}>
                            <Text style={styles.text}>Iniciar Sesion</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    </>
    );
};
