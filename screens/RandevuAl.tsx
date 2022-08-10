import { StyleSheet,Dimensions, TextInput } from 'react-native';
import React from 'react';
import { Text, View } from  'react-native'

function RandevuAl (){
   return (
    <View style={styles.container}>
      <Text> randevu  </Text>    
       
    </View>
   )
 }

 export default RandevuAl ;

const styles = StyleSheet.create({

  container:{
  flexDirection:'row'  
  },
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',

   
  },
  
});
