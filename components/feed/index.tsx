import React from "react";
import { View,FlatList } from "react-native";
import datas from '../../data/RandevuData'
import RandevuContainer from "../RandevuContainer/RandevuContainer";

const Feed = ()=>
(
    <FlatList 
      data={datas}
      renderItem={({item})=> <RandevuContainer randevu={item} />}
      keyExtractor={(item)=> item.id }
      />
)
    


export default Feed