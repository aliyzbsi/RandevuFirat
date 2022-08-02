import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

import { RandevuType } from '../../../types'

export type  LeftContainerProps ={
  RandevuDate:RandevuType
}

const LeftContainer = ({RandevuDate}:LeftContainerProps) => {
  return (
    <View style={styles.container}> 
        <Text style={styles.tarih}> {RandevuDate.randevuTarih} </Text>
        <Text style={styles.saat}> {RandevuDate.randevuSaati}</Text>
    </View>
  )
}

export default LeftContainer

const styles = StyleSheet.create({
    container: {
      flex: 0.4,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:Colors.light.tint,
      borderBottomLeftRadius:20,
      borderTopLeftRadius:20,
      padding:2,
      paddingTop:15,
      padddingBottom:5,

    },
    tarih:{
      flex:1,
      padding:2,
      alignItems:'center',
      alignSelf:'center',
     margin:2
    },
    saat:{
      flex:1,
      padding:2,
      paddingBottom:5
    }
   
  });
  