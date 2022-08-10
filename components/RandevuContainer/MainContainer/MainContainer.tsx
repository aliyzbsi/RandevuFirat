import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'
import { RandevuType } from '../../../types'

 export type MainContainerProps={
  randevuData:RandevuType,
 }

const MainContainer = ({randevuData}:MainContainerProps) => {
  return (
    <View style={styles.container}> 
        <Text style={styles.title}>{randevuData.name_r} </Text>
         <Text style={styles.text}> {randevuData.campus_r}</Text> 
         <Text style={styles.text}> {randevuData.faculty_r}</Text>
         <Text style={styles.text}> {randevuData.department_r}</Text>
    </View>
  )
}

export default MainContainer

const styles = StyleSheet.create({
    container: {
      backgroundColor:Colors.light.white,
      flex: 1,
      padding:2,
      borderTopRightRadius:20,
      borderBottomRightRadius:20,
      paddingLeft:3
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        color:'#444444',
        margin:2,
        paddingBottom:3
    },
    text:{
      
    }
   
  });
  