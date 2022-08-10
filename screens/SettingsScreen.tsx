import { StyleSheet,Dimensions, TextInput ,TouchableOpacity, Button} from 'react-native';
import React from 'react';
import { Text, View } from  'react-native'
import {  RootStackScreenProps } from '../types';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function SettingsScreen ({navigation}:RootStackScreenProps<'Settings'>){

   return (
    <View style={styles.container}>
       
       <View style ={styles.properties}>
         <View style={styles.innerContainer}>
            <Ionicons name='language' color='#444444' size={30}/>
              <Text style={styles.text}> Dil </Text>
         </View>
              
         <View style={styles.innerContainer}>
            <MaterialCommunityIcons name='lock' color='#444444' size={30}/>
              <Text style={styles.text}> Şifre Değiştirme </Text>
         </View>

         <View style={styles.innerContainer}>
            <MaterialCommunityIcons name='theme-light-dark' color='#444444' size={30}/>
              <Text style={styles.text}> Tema  </Text>
         </View>
       </View>
     
   
 
    <View style={styles.footer}>
      <Button  title ='Ansayfaya Dön'onPress={()=>navigation.navigate('Root')} color={Colors.light.tint} />
    </View >
       
      
       
    </View>
   )
 }


 export default SettingsScreen ;



const styles = StyleSheet.create({

  container:{
   flex:1,
   
  },
  properties:{
    marginVertical:20,
  },

 text:{
  fontSize:20,
  margin:5
 },
 innerContainer:{
  flexDirection:'row',
  marginLeft:20,
  margin:10
 },
 footer:{
  flex:0.10,
  marginTop:'auto',

 }
  
});
