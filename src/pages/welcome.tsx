import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import wateringImg from '../assets/watering.png'
import { UserIdentification } from './UserIdentification';

export function Welcome() {

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification')
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.wrapper}>

        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas {'\n'}
          de forma fácil
        </Text>

        <Image
          style={styles.image}
          source={wateringImg}
          resizeMode='contain'        
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar {'\n'}
          você sempre que precisar.
        </Text>

        <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
        >

          <Text>
            <Feather
              name='chevron-right'
              style={styles.buttonIcon}
            /> 
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,        
  },

  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },

  title: {
    fontSize: 28,
    fontFamily: fonts.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38, 
    lineHeight: 34      
  },
  
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 18,
    color: colors.heading,
    paddingHorizontal: 20  
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',    
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },

  buttonIcon: {
    fontSize: 32,        
    color: colors.white,     
  },

  image: {    
    height: Dimensions.get('window').width * 0.7
  }


});