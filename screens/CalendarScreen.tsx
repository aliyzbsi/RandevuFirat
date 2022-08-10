import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import { CalendarList,Calendar} from 'react-native-calendars';
import dateFns from 'date-fns'
import { setBackgroundColorAsync } from 'expo-system-ui';
import Colors from '../constants/Colors';


const format = (date= new Date())=>dateFns.format(date,'YYYY-MM-DD') 

export default function App() {
  const baseDate = new Date('2022,8,7')
  return (
    <View style={styles.container} >
     <Calendar
     onDayPress={(response)=>console.log(response)}
     //current={format(baseDate)}
          
     />

     <View style={styles.content}>
          <View style={styles.inner_content}>
             <Text style={styles.tarih}>1 Temmuz 2022 </Text> 
             <Text style={styles.text}>Doç. Dr Musatafa Ulaş ile saat:15 00 randevunuz bulunmaktadır</Text>
             <Text style={styles.text}>Doç. Dr Fahrettin Göktaş  ile saat:15 00 randevunuz bulunmaktadır</Text>
          </View>
     </View>
    </View>
    
 ); 
 }

 const styles = StyleSheet.create({
  container:{
     flex:1,
    marginVertical:10,
    marginHorizontal:15,
    
  },
  content:{
    marginTop:10,
    margin:1,
    padding:10,
   
  },

  inner_content:{
     justifyContent:'center' ,
     alignSelf:'center',
     borderColor:'black',
     borderRadius:10,
     borderWidth:1,
    // paddingBottom:10,
     padding:10
  },
  tarih:{
    fontSize:20,
    alignSelf:'center',
    padding:5,
   

  },
  text:{
    fontSize:14,
    textAlign:'center',
    margin:2,
    padding:2
   
  }
 })