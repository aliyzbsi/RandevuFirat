import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

import Colors from '../../constants/Colors';

import {  RandevuType} from '../../types';


export type TopContainerProps ={
  userInformations:RandevuType,

}
const TopContainer = ({userInformations}:TopContainerProps) => {
  return (
<View style={styles.container}> 
    <ProfilePicture image={userInformations.user.image} name={userInformations.user.name}/>

<View style={styles.inner_container}> 

   <View style={styles.inner_left_container}>
           <View style={styles.camera}>
                 <Ionicons name='md-camera' size={45}  color={Colors.light.tint} />
           </View>
           <View>
                <Text style={styles.text}>Görüntülü Randevular </Text>
          </View>
     </View>

      <View style={styles.inner_right_container}>
            <View style={styles.calendar}>
               <MaterialCommunityIcons name='calendar-clock' size={45}  color={Colors.light.tint}/>  
            </View>
           
            <View>
                <Text style={styles.text}>Geçmiş Randevular </Text>
          </View>
      </View>

      </View>
 </View>
  )
}

export default TopContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  inner_container:{
  flexDirection:'row',
  justifyContent:'space-between'
  
  },
  inner_right_container:{
    alignItems:'center',
    margin:10,
    marginBottom:20,
  },
  inner_left_container:{
    alignItems:'center',
    margin:10
},
  
 calendar:{
  margin:2,
 
 },
 camera:{
  margin:2,
  
 },
 text:{
 margin:2,
  alignSelf:'center',
  fontSize:15,
  
  
 }
 
});
