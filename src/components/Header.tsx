import React, { useEffect, useState } from 'react';
import {  
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import UserImg from '../assets/FotoPerfil.jpg';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header () {

  const [userName, setUserName] = useState<string>();

  useEffect (() => {

    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem(`@plantmanager:user`);
      setUserName(user || '');       
    }
    
    loadStorageUserName();
  },[]);
  

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.greeting}>
        Olá,
      </Text>
      <Text style={styles.userName}>        
        { userName }                
      </Text>
      </View>

      <Image source={UserImg} style={styles.image}/>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {      
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: Constants.statusBarHeight    
  },
  greeting: {
    fontSize: 32,
    fontFamily: fonts.text,
    color: colors.heading
  },
  userName: {    
    fontSize: 32,
    fontFamily: fonts.heading,
    color:colors.heading,
    lineHeight: 40
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    
  },

});