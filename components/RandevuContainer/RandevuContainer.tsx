import React from 'react'
import { View,StyleSheet ,Dimensions} from 'react-native'
import LeftContainer from './LeftContainer/LeftContainer'
import MainContainer from './MainContainer/MainContainer'

import { RandevuType } from '../../types';
 export type RandevuProps={
 randevu:RandevuType,
 }

const RandevuContainer = ({randevu}:RandevuProps) => {
  return (
    <View style={styles.container}>
       <LeftContainer RandevuDate={randevu} />
       <MainContainer randevuData={randevu}/>
    </View>
  )
}

export default RandevuContainer

  const window = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      flexDirection:'row',
      borderColor:'gray',
      borderWidth:0.2,
      borderRadius:15,
      height:100,
      width:280,
      marginRight:50,
      marginLeft:50,
      margin:5,

    },
   
  });