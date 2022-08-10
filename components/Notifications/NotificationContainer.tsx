import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

import { RandevuType } from '../../types'

export type  LeftContainerProps ={
  appointmentStuation:RandevuType
}

const NotificationContainer = ({appointmentStuation}:LeftContainerProps) => {
  return (
  
    <View style={styles.container}> 
      <Text style={styles.title}> {appointmentStuation.name_r}</Text>
        <Text style={styles.tarih}> {appointmentStuation.randevuTarih} /
        {appointmentStuation.randevuSaati}  </Text>
        
       <Text style={styles.stuation}> tarihli randevunuz {appointmentStuation.stuation} </Text>
    </View>
  )
}

export default NotificationContainer

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center',
      borderColor:'#444444',
      borderWidth:1,
      borderRadius:15,
      margin:5,
      padding:2,
      padddingBottom:5,
      minHeight:90,
      paddingBottom:3,
      paddingTop:3,
      paddingRight:2,
      paddingLeft:2,

     //make control 
     marginRight:18,
     marginLeft:18


    },
    stuation:{
      flex:1,
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      fontSize:14,
      paddingBottom:5,
      margin:2,
      textAlign:'center',
      padding:2,
    },
   title:{
   fontSize:18,
   padding:2,
   marginTop:2
   
   },
   tarih:{
    flex:1,
    color:Colors.light.tint,
    fontSize:15,
    fontWeight:'bold',
    padding:2
    
   }
   
   
  });
  