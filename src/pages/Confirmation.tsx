import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View  
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../componets/Button';
import { PlantSelect } from './PlantSelect';

interface Params {
  title: string;
  subTitle: string;
  buttonTitle: string;
  icon: 'smile' | 'plant',
  nextScreen: string;  
}

const emojis = {
  smile: '😁',
  plant: '🌿'
}

export function Confirmation () {

  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subTitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn(){
    navigation.navigate(nextScreen)
  };

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>
        
        <Text style={styles.text}>
          {subTitle}          
        </Text>    

        <View style={styles.footer}>
          <Button
            title={buttonTitle}
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