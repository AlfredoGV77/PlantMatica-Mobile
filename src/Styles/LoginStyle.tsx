/* eslint-disable prettier/prettier */
//CON ESTO HAREMOS NUESTROS ESTILOS. ESTO PARA QUE SE VEAN BONITOS. DIGAMOS Q CREAMOS UN ARREGLO Y CADA ELEMENTO ES UN ESTILO
//Cuando lo llamemos ponemos styles.nombreDeLaVariable
import {Dimensions, StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Sans-serif-Roboto',
    color: '#ffffff',
  },
  brandViewText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
    fontFamily: 'Sans-serif-Roboto',
  },
  //ES LA BARRITA QUE SEPARARA EL LOGO CON LOS BOTONES
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  ViewInputs: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 2,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#0dd76f',
    borderRadius: 23,
    paddingHorizontal: 10,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 16,
    height: 40,
    color: 'black',
    width: '90%',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#0dd76f',
    width: Dimensions.get('window').width / 1.3,
    justifyContent: 'center',
    height: Dimensions.get('window').height / 15,
    borderRadius: 23,
    alignItems: 'center',
  },
  button_shadow: {
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 90.2,
    shadowRadius: 5,
    elevation: 25,
    shadowColor: 'green',
  },
  newUserContainer:{
    alignItems:'flex-end',
    marginTop:10,
  },
  dropdown:{
    width:'90%',
    height:40,
    fontSize:16,
    backgroundColor:'white',
    borderRadius:23,
  },
  dropdownX:{
    left:60,
    fontSize:16,
    backgroundColor:'white',
    borderRadius:23,
  },
});
