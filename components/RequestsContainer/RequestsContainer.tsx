import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Colors from '../../constants/Colors'

import { RandevuType } from '../../types'

export type  RequestContainerProps ={
 RequestsData :RandevuType
}

const RequestsContainer = ({RequestsData}:RequestContainerProps) => {
  return (
    <View style={styles.container}> 
          <Text style={styles.tarih}>{RequestsData.randevuTarih}</Text>
          <Text   style={styles.saat}>Saat : {RequestsData.randevuSaati}</Text>
          <Text style={styles.title}>{RequestsData.name_r} ile randevunuz bulunmaktadır</Text>
    </View>
  )
}

export default RequestsContainer

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
      minHeight:100,
      padddingBottom:5,
      paddingBottom:3,
      paddingRight:2,
      paddingLeft:2,
   

    },
   
 tarih:{
   flex:1,
   fontSize:16,
   padding:2,
   
   },
   title:{
    flex:1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center',
    fontSize:14,
    margin:2,
    textAlign:'center',
    padding:2,
   
   },
   saat:{
    color:Colors.light.tint,
    fontSize:15,
    fontWeight:'bold'
   }
   
   
  });
  