/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Drawer:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  RequestScreen: undefined;
  Calendar:undefined;
  Home: undefined;
  Notification:undefined;
  Randevu :undefined;
  Settings:undefined;
  
};


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
  > 


  // declared types of datas 
 
 export type UserType ={
  id:string,
  name: string ,
  email:string,
  image?: string ,
  department:string,
  faculty:string,
  campus:string,
  
  
}

export type RandevuType={
  randevuSaati?:string,
  randevuTarih?:string,
  user:UserType,
      email_r:string,
      name_r:string,
      image_r?:string,
      department_r:string,
      faculty_r:string,
      campus_r:string,
}