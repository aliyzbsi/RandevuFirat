
import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import NotificationData from '../data/RandevuData';
import NotificationContainer from '../components/Notifications/NotificationContainer';



export default function NotificationScreen() {
  return (
    <View style={styles.container}>
      
       <FlatList  data ={NotificationData}
       renderItem={({item})=><NotificationContainer appointmentStuation={item}/>}
       keyExtractor={(item)=>item.id}
       />    
     
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   marginBottom:100,
   marginTop:20,
   marginRight:29.5,
   marginLeft:29.5,
  
 
  },
 
});
