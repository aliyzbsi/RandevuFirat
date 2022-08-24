import * as React from 'react';
import { FlatList, StyleSheet, TouchableOpacity,Text,View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import { RootTabScreenProps } from '../types';
import RequestsData from '../data/RandevuData';
import RequestsContainer from '../components/RequestsContainer/RequestsContainer';


export default function RequestScreen({ navigation }: RootTabScreenProps<'RequestScreen'>) {
  return (
    <View style={styles.container}>
     
      <FlatList data={RequestsData}
        renderItem={({item})=><RequestsContainer RequestsData={item} />
      } 
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

/*
 <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
*/