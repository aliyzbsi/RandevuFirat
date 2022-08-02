import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Text, View } from  'react-native'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> search screen </Text>
      <Text>randevu almak istediğiniz birimi giriniz? </Text>
       <View style ={{borderColor:'black' ,borderWidth:1,borderRadius:10}}>
            <TextInput placeholder='yönetim birimi' />    
       </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
});
