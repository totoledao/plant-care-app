import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View  
} from 'react-native';
import { useNavigation } from '@react-navigation/core'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../componets/Button';
import { PlantSelect } from '../pages/PlantSelect';

export function Confirmation () {

  const navigation = useNavigation();

  function handleMoveOn(){
    navigation.navigate('PlantSelect')
  };

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.emoji}>
          😁
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>
        
        <Text style={styles.text}>
        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>    

        <View style={styles.footer}>
          <Button
            title='Começar'
            onPress={handleMoveOn}
          />
        </View>

      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around' 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,    
  },
  emoji: {
    fontSize: 78,
    alignItems: 'center'
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 22,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    paddingTop: 50
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 17,
    paddingHorizontal: 10,
    color: colors.heading,
    textAlign:'center',
    paddingBottom: 50
  },
  footer: {
    width: '100%',
    alignItems: 'center'
  }
});