/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {StyleSheet,Dimensions } from "react-native";

/* eslint-disable prettier/prettier */
export const DetallePlantaStyle = StyleSheet.create({
    Header:{
        zIndex:999,
        height:Dimensions.get('window').height / 2.5,
        borderBottomRightRadius:1000,
        borderBottomLeftRadius:1000,
    },
    BackButton:{
        left:15,
    },
    Title:{
        fontSize:40,
        textAlignVertical: "center",
        textAlign: "center",
        color:'white',
        fontFamily: 'Sans-serif-Roboto',
    },
    Imagen:{
        top:-120,
        width:150,
        height:150,
        left:120,
    },
})

;
