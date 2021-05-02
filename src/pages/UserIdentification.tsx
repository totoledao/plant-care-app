import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Confirmation } from './Confirmation';
import { Button } from '../componets/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function UserIdentification () {
  
  const navigation = useNavigation();
  
  const [isFocused, setIsFocused]= useState(false);
  const [isFilled, setIsFilled]= useState(false);
  const [name, setName]= useState<string>();
  
  function handleInputBlur (){
    setIsFocused(false)
    setIsFilled(!!name)
  };

  function handleInputFocus (){
    setIsFocused(true)
  }; 

  function handleInputChange (value: string){
    setIsFilled(!!value)
    setName(value);
  };  

  async function handleSubmit() {
    
    if (!name) 
     return Alert.alert('Hey, me conta o seu nome ✌')    

     try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subTitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen:'PlantSelect'
        }      
      );
     } catch {
      Alert.alert('Não foi possível salvar seu nome de usuário 🤔');
     }
        
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.content}>

          <View style={styles.form}>

            <Text style={styles.emoji}>
              { isFilled ? '😁' : '😃'}
            </Text>

            <Text style={styles.title}>
            Como podemos {'\n'}
            chamar você?
            </Text>

            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && { borderColor: colors.green }
              ]}
              placeholder='Digite o nome'
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            

            <View style={styles.footer}>
              <Button
                title='Confirmar'
                onPress={handleSubmit}
              />            
            </View>

          </View>

        </View>

      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  content: {
    flex: 1,
    width: '100%',
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 54,
    alignItems: 'center',
  },
  
  emoji: {
   fontSize: 44
  },
  
  input: {
  borderBottomWidth: 1,
  borderColor: colors.gray,
  color: colors.heading,
  width: '100%',
  fontSize: 18,
  marginTop: 50,
  padding: 10,
  textAlign: 'center'
  },

  title: {
    marginTop: 20,
    fontSize: 24,   
    lineHeight: 32,   
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  footer: {
    width: '100%',
    marginTop: 40,  
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});