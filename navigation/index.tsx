
import { FontAwesome, Ionicons,
  MaterialCommunityIcons, } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import {ColorSchemeName, Pressable, View, Image,Text } from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import SettingsScreen from '../screens/SettingsScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import RandevuAl from "../screens/RandevuAl";
import NotificationScreen from "../screens/NotificationScreen";
import CalendarScreen from "../screens/CalendarScreen";
import RequestScreen from "../screens/RequestScreen";

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import ProfilePicture from '../components/ProfilePicture/ProfilePicture';
//import LinkingConfiguration from './LinkingConfiguration';
import { Dimensions} from "react-native";
      const screenHeight = Dimensions.get('screen').height;
      const navbarHeight = screenHeight*0.11 ;

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
     <Stack.Screen name='Drwer' component={CalendarScreen} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={SettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Drawer =createDrawerNavigator();
function  DrawerNavigator(){
    <Drawer.Navigator>
         <Drawer.Screen name='Settings' component={SettingsScreen}/>
    </Drawer.Navigator>
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
             },
             headerStyle:{
               backgroundColor:Colors.light.tint,
               height:navbarHeight
             },
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
            headerLeft:()=>(
               <MaterialCommunityIcons name="playlist-edit" size={30}  color={Colors.light.white}/>
               
            ),
           
            headerTitle:()=>(
            
                        <Text style={{fontSize:20 , fontWeight:'bold', color:Colors.light.white}}>Fırat Üniversitesi</Text>
           
              
              
            ), 
  
            headerTitleAlign:'left',
  
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Calendar')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                  marginRight:10,
                })}>
                <MaterialCommunityIcons
                 name="account-edit"
                 size={32}
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
            title: "Calendar Screen",
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
            title: "Notification Screen",
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
            title: "gelen randevu isteklerim ",
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
