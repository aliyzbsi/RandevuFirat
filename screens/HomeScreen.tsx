
import React  from 'react';
import { StyleSheet, TouchableOpacity ,ScrollView,Text,View,FlatList} from 'react-native';
import TopContainer from '../components/TopContainer/TopContainer';
import RandevuContainer from '../components/RandevuContainer/RandevuContainer';

import randevuData from '../data/RandevuData';
import Feed from '../components/feed'

export default function HomeScreen() {

  return (
      <View style={styles.container} >
         <TopContainer userInformations={randevuData[1]}/>
          <Text style={styles.title}> Yaklaşan Randevular </Text>
            <View style ={styles.listContainer}>
               <Feed/>
            </View>
          
      </View>
  );
}

/*
  <
*/



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
    
  },
  listContainer:{
    flex:1,
    margin:10
  }
 
});
