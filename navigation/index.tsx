
import { FontAwesome, Ionicons,
  MaterialCommunityIcons, } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme ,DrawerActions} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, View, Image,Text ,Dimensions, BackHandler} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SettingsScreen from '../screens/SettingsScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import RandevuAl from "../screens/RandevuAl";
import NotificationScreen from "../screens/NotificationScreen";
import CalendarScreen from "../screens/CalendarScreen";
import RequestScreen from "../screens/RequestScreen";


import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import { ScreenStackHeaderRightView } from 'react-native-screens';
//import LinkingConfiguration from './LinkingConfiguration';


      const screenHeight = Dimensions.get('screen').height;
      const navbarHeight = screenHeight*0.12 ;

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      //linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
       <Stack.Screen name='Settings' component={SettingsScreen} options={{headerTitle:'Ayarlar',headerStyle:{backgroundColor:Colors.light.tint},headerTitleStyle:{fontSize:25}}}  />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={SettingsScreen} /> 
      </Stack.Group>
    </Stack.Navigator>
  );
}




const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveBackgroundColor:'#fff',
          tabBarStyle: { position: "absolute", marginBottom: 2, height: "8%" },
          // tabBarActiveTintColor:Colors.light.tint,
          tabBarShowLabel: false,
          tabBarInactiveBackgroundColor :'#fff'
    
          
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }: RootTabScreenProps<'Home'>) => ({
            
            headerLeftContainerStyle:{
              marginRight:15,
              marginLeft:5,
             },
             headerRightContainerStyle:{
              marginLeft:15,
              marginRight:10,
              padding:2
             },
             headerStyle:{
               backgroundColor:Colors.light.tint,
               height:navbarHeight
             },
             headerTitleAlign:'center',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home"
                color="#444444"
                size={32}
                style={{
                  // color:focused? Colors.light.tint:'#444444',
                  borderBottomColor: focused ? Colors.light.tint : "#444444",
                  borderBottomWidth: focused ? 4 : 0,
                }}
              />
            ),
          
            
            headerTitle:()=>(
            
                        <Text style={{fontSize:20 , fontWeight:'bold', color:Colors.light.white,marginBottom:5}}>Fırat Üniversitesi</Text>
             
            ), 
            headerLeft:()=>(
                <MaterialCommunityIcons name='playlist-edit' color={Colors.light.white} size={30}/> 
            
            ),
  
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Settings')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight:10,
                
                })}>
                <Ionicons
                 name="settings"
                 size={30}
                 color="#444444"
                />
              </Pressable>
            ),
          })}
        />
  
        <BottomTab.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            
           // title: "Calendar Screen",
            headerStyle:{  //kod tekrarı var 
              backgroundColor:Colors.light.tint,
              height:navbarHeight
            },
          headerTitle:()=>(
            <Text style={{fontSize:20,fontWeight:'bold',color:Colors.light.white,margin:2,marginBottom:5}}>Randevu Takvimi </Text>
          ),

          headerTitleAlign:'center',
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="calendar"
                color="#444444"
                size={32}
                style={{
                  paddingBottom: 4,
                  //color:focused? Colors.light.tint:'#444444',
                  borderBottomColor: focused ? Colors.light.tint : "#444444",
                  borderBottomWidth: focused ? 4 : 0,
                }}
              />
            ),
          }}
        />
  
        
        <BottomTab.Screen
          name="Randevu"
          component={RandevuAl}
          
          options = {({navigation}:RootTabScreenProps<'Randevu'>) =>({ 
            title: "seacrh for appointment",
            headerStyle:{  //kod tekrarı var 
              backgroundColor:Colors.light.tint,
              height:navbarHeight
            },
            
            tabBarIcon: ({ focused }) => (
              <Pressable
              onPress={() => navigation.navigate('Randevu')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 4,
               // marginLeft:5
              })}>
              <View>
                <Image
                  source={require("../assets/images/ArkaPlan.png")}
                   style={{width:60,height:55,
                    paddingBottom:5,
                     tintColor: focused ?Colors.light.tint : Colors.light.tint
                  }}
                />
                <Text
                  style={{color:focused? '#fff':'#fff',height:'100%'}}
                > Merhaba </Text>
              </View>
              </Pressable>
            ),
      })}
        />
        <BottomTab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{

            headerStyle:{  //kod tekrarı var 
              backgroundColor:Colors.light.tint,
              height:navbarHeight
            },
            headerTitleAlign:'center',
            headerTitle:()=>(
              <Text style={{fontSize:20,fontWeight:'bold',color:Colors.light.white,margin:2,marginBottom:5}}> Bildirimler  </Text>
            ),

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="notifications"
                color="#444444"
                size={32}
                style={{
                  //color:focused? Colors.light.tint:'#444444',
                  borderBottomColor: focused ? Colors.light.tint : "#444444",
                  borderBottomWidth: focused ? 4 : 0,
                }}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="RequestScreen"
          component={RequestScreen}
          options={{
          //  title: "gelen randevu isteklerim ",
            headerStyle:{  //kod tekrarı var 
              backgroundColor:Colors.light.tint,
              height:navbarHeight
            },
            headerTitleAlign:'center',
            headerTitle:()=>(
              <Text style={{fontSize:20,fontWeight:'bold',color:Colors.light.white,margin:2,marginBottom:5}}> Onaylanan Randevular   </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="playlist-check"
                color="#444444"
                size={32}
                style={{
                  //  color:focused? Colors.light.tint:'#444444',
                  borderBottomColor: focused ? Colors.light.tint : "#444444",
                  borderBottomWidth: focused ? 4 : 0,
                }}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
  
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
