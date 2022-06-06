/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

/* eslint-disable prettier/prettier */
export const ProfileStyle = StyleSheet.create({
    containerImage: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
    },

    bottomContainer:{
        marginTop:'92%',
        height:'100%',
        width:400,
        backgroundColor:'white',
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        alignItems:'center',
    },
    profile:{
        height:120,
        width:120,
        borderRadius:25,
        bottom:'10%',
    },
    nombre:{
        fontSize:36,
        fontWeight:'bold',
        bottom:'8%',
        color:'black'
    },
    number:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
    },
    numberSecond:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    estadoysexo:{
        bottom:'1%',
        color:'black',
        fontSize:18,
        marginHorizontal:15,
        alignItems:'center',
    },
    button:{
        borderRadius:100,
        padding:10,
    },
    textBTN:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }


});
