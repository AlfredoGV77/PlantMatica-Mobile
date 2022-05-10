/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

/* eslint-disable prettier/prettier */
export const PlantCardStyle = StyleSheet.create({

    titulo:{
        fontSize:40,
        fontWeight:"bold",
        color:"#0dd76f",
        marginLeft:15,
    },
    cardContainer:{
        marginHorizontal:10,
        height:Dimensions.get('window').height/4,
        width:Dimensions.get('window').width/2.25,
        marginBottom:25,
        borderColor:'black',
        borderRadius:10,
    },
    view:{
        alignItems:"center",
    },
    name:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        top:20,
        left:5,
    },
    etiquetas:{
        fontSize:15,
        color:'white',
        top:20,
        paddingLeft:5,
        height:25,
        borderRadius:10,
        margin:2,
    },
    esquina:{
        width:100,
        height:100,
        position:"absolute",
        bottom:-20,
        right:-20,
        opacity:0.3,
    },
    imagen:{
        width:100,
        height:100,
        marginTop:80,
        position:"absolute",
        right:30,
        borderRadius:100,
    },
})

;
