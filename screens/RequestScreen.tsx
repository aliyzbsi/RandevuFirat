
import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function RequestScreen({ navigation }: RootTabScreenProps<'RequestScreen'>) {
  return (
    <View style={styles.container}>
     
         <Text > Requests screen </Text>
                 <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                 <EditScreenInfo path="/screens/TabOneScreen.tsx" />
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
 
});
