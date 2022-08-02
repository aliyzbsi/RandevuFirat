import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import { accounContainerType } from '../../types'

export type AccountContainerProps ={
    text:accounContainerType,
   }

const SettingsContainer = () => {
  return (
    <View style={styles.container}>
        <View>
             <Ionicons name='person-outline' color={Colors.light.tint} size={30} />
       </View> 
       <View>
           <Text> profilim </Text>
       </View>
       

    </View>
  )
}

export default SettingsContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      flexDirection:'row',
      padding:2
    },
   
  });
  