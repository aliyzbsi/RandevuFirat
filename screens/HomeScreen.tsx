
import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity ,ScrollView,Text,View} from 'react-native';
import TopContainer from '../components/TopContainer/TopContainer';
import RandevuContainer from '../components/RandevuContainer/RandevuContainer';

import randevuData from '../data/RandevuData';

export default function HomeScreen() {

  return (
      <View style={styles.container} >
         <TopContainer userInformations={randevuData[1]}/>
          <Text style={styles.title}> Yaklaşan Randevular </Text>

          <ScrollView style={styles.scrollview} horizontal={true}  >
                   <RandevuContainer randevu={randevuData[1]}/>
                   <RandevuContainer randevu={randevuData[0]}/>
                  
      
          </ScrollView>
        
         
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'

  },
  title: {
    fontSize:18,
    fontWeight:'bold',
    alignSelf:'center',
    margin:7,
    color:'#444444',

  },
  scrollview:{
    flex:1,
  
    
  }
 
});
