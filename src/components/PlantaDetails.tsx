/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PlantaFullInformation } from '../interfaces/plantaInterfaces';
import { DetallePlantaStyle } from '../Styles/DetallePlantaStyle';

interface Props {
    planta:PlantaFullInformation;
    color:String;
}

export const PlantaDetails = ({planta,color}:Props) => {
    const ref = React.useRef<FlatList>(null);
    const [index, setIndex] = useState(0);
    // ESTO PORQUE EL PUTX PROPS NO ME DEJA PASAR LA VARIABLE NORMAL. ESTUVE COMO PENDEJO 2 HORAS VIENDO QPD
    const color2 = `${color}`
  return (
      <ScrollView style={{...DetallePlantaStyle.absoluteFillObject}}>

          {/* Etiquetas de la planta */}
          <View style={{...DetallePlantaStyle.container,borderBottomColor:'white', marginTop:10, marginRight:10}}>
            <FlatList
                    ref={ref}
                    horizontal
                    initialScrollIndex={index}
                    data={
                         planta.ficha.etiquetas.length === 0
                         ? ['Sin datos']
                         : (planta.ficha.etiquetas.map((item)=>item))
                    }
                    renderItem={({item})=><Text style={{...DetallePlantaStyle.etiquetas, color:'white', backgroundColor:color2}}>{item}</Text>}
                /> 
         </View>              

          {/* Nombre Cientifico de la Planta */}
          <View style={{...DetallePlantaStyle.container, borderBottomColor:color2,marginLeft:10, marginRight:10}}>
              <Text style={{...DetallePlantaStyle.title}}>Nombre Cientifico: {planta.ficha.nombre_cientifico}</Text>
          </View>

          {/* Origen y distribucion de la Planta */}
          <View style={{...DetallePlantaStyle.container, borderBottomColor:color2, marginLeft:10, marginRight:10}}>
              {
                  planta.ficha.origen_distribucion.map(({nombre})=>(
                      <Text key={nombre} style={{...DetallePlantaStyle.title}}>Pais de Origen: {nombre}</Text>
                  ))
              }
              {
                  planta.ficha.origen_distribucion.map(({detalles})=>(
                      <Text key={detalles} style={{...DetallePlantaStyle.title}}>Detalles de Distribucion: {detalles}</Text>
                  ))

              }             
          </View>

          {/* Descripcion de la Planta */}
          <View style={{...DetallePlantaStyle.container, backgroundColor:color2, borderRadius:20, marginLeft:10, marginRight:10}}>
              <Text style={{...DetallePlantaStyle.title,color:'white', margin:5}}>Descripcion: {planta.ficha.descripcion}</Text>
          </View>          

         {/* Caracteristicas Especiales de la Planta */}     
         <View style={{...DetallePlantaStyle.container, borderBottomColor:color2, marginRight:10}}>
            <Text style={{...DetallePlantaStyle.title,color:color2, margin:5}}>Caracteristicas Especiales:</Text>
            <FlatList
                    ref={ref}
                    horizontal
                    initialScrollIndex={index}
                    data={
                         planta.ficha.caracteristicas_especiales.length === 0
                         ? ['Sin datos']
                         : (planta.ficha.caracteristicas_especiales.map((item)=>item))
                    }
                    renderItem={({item})=><Text style={{...DetallePlantaStyle.etiquetas}}>○{item}</Text>}
                /> 
         </View>    

          {/* Complemento  de la Planta */}         
          <View style={{...DetallePlantaStyle.container,borderBottomColor:color2, marginLeft:10, marginRight:10}}>
              <Text style={{...DetallePlantaStyle.title}}>Complemento: {planta.ficha.complemento}</Text>
          </View>         


            {/* Usos Medicinales  de la Planta */}       
          <View style={{...DetallePlantaStyle.container, borderBottomColor:color2, marginRight:10}}>
            <Text style={{...DetallePlantaStyle.title,color:color2, margin:5}}> Usos Medicinales:</Text>
            <FlatList
                ref={ref}
                horizontal
                initialScrollIndex={index}
                data={
                        planta.ficha.usos_medicinales.length === 0
                        ? ['Sin datos']
                        : (planta.ficha.usos_medicinales.map((item)=>item))
                }
                renderItem={({item})=><Text style={{...DetallePlantaStyle.etiquetas, backgroundColor:color2,color:'white'}}>{item}</Text>}
            /> 
         </View>   

          {/* Consumo  de la Planta */}       
          <View style={{...DetallePlantaStyle.container, borderBottomColor:color2, marginRight:10}}>
            <Text style={{...DetallePlantaStyle.title,color:color2, margin:5}}> Formas de Consumo:</Text>
            <FlatList
                ref={ref}
                horizontal
                initialScrollIndex={index}
                data={
                        planta.ficha.consumo.length === 0
                        ? ['Sin datos']
                        : (planta.ficha.consumo.map((item)=>item))
                }
                renderItem={({item})=><Text style={{...DetallePlantaStyle.etiquetas}}>♦{item}</Text>}
            /> 
         </View>  
  

      </ScrollView>
  )
}
