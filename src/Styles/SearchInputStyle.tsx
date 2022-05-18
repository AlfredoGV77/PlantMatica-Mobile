/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Dimensions, StyleSheet } from "react-native";

/* eslint-disable prettier/prettier */
export const SearchInputStyle = StyleSheet.create({
    container:{
    },
    textBackground:{
        backgroundColor:'#F3F1F3',
        borderRadius:50,
        height:40,
        marginLeft:10,
        marginRight:10,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.55,
        shadowRadius:8.84,
        elevation:5,
    },
    textInput:{
        flex:1,
        color:'black',
        fontSize:18,
    },
});
