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
export const PlantGCardStyle = StyleSheet.create({
    titulo:{
        fontSize:40,
        fontWeight:"bold",
        color:"#0dd76f",
        textAlign:"center",
        marginLeft:15,
        marginRight:15,
    },
    cardContainer:{
        height:Dimensions.get('window').height/10,
        width:'94%',
        margin:10,
        borderRadius:10,
    },
    name:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        top:Dimensions.get('window').height/500,
        left:5,
        fontFamily:'Sans-serif-Roboto',
    },
    etiquetas:{
        fontSize:15,
        color:'white',
        top:6,
        paddingLeft:5,
        height:25,
        borderRadius:10,
        margin:2,
    },
    tagsContainer:{
        width:250,
    },
    imagen:{
        width:50,
        height:50,
        top:6,
        position:"absolute",
        right:10,
        borderRadius:10,
    },
    rowBack: {
        backgroundColor: 'white',
        height:Dimensions.get('window').height/10,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft:295,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        top: 11,
        height:Dimensions.get('window').height/10.4,
        borderRadius:10,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right:0,
    },
})

;
