import React from 'react'
import { View,Image ,Text,StyleSheet} from 'react-native'



export type ProfilePİctureProp={
  image?:string,
  name:string,
}

const ProfilePicture = ({image,name}:ProfilePİctureProp) => {
  return (
    <View  style={styles.container}>
       <Image source={{uri:image}}  
       style={styles.Image} />
       <Text style={styles.text}>{name}</Text>
    </View>
  )
}


export default ProfilePicture

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin:2,
    justifyContent:'center',
    alignItems: 'center',

    
  },
  text:{
      fontSize:20,
      fontWeight:'bold',
      alignSelf:'center',
      color:'#444444',
  },
  Image:{
    shadowColor:'gray',
    margin:5,
    marginTop:10,
    padding:5,
    resizeMode:'cover',
    height:100,
    width:100,
    borderRadius:100,
    alignContent:'center'
  }
 
});
