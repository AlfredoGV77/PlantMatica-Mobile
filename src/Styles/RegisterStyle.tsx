/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

/* eslint-disable prettier/prettier */
export const styleRegister = StyleSheet.create({
    esquina: {
        position: "absolute",
        width: Dimensions.get('window').width / 1.5,
        height:Dimensions.get('window').height / 2.7,
        top:-Dimensions.get('window').height / 10.6 ,
        right:-Dimensions.get('window').width / 4.0,
        opacity:0.25,
    },
    titulo:{
        fontSize:49,
        fontWeight:"bold",
        color:"#0dd76f",
        marginLeft:15,
    }
});
