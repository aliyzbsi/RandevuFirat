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
        <Text style={styles.tarih}> {RandevuDate.randevuSaati}</Text>
    </View>
  )
}

export default LeftContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:Colors.light.tint,
      borderBottomLeftRadius:20,
      borderTopLeftRadius:20,
      padding:2
    },
    tarih:{
      padding:2,
      margin:2
    }
   
  });
  