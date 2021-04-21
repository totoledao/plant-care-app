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
  Keyboard
} from 'react-native';
import { useNavigation } from '@react-navigation/core'

import { Confirmation } from './Confirmation';
import { Button } from '../componets/Button';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export function PlantSelect () {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Selecionar planta
      </Text>
    </SafeAreaView>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,

  },
  text: {
    fontFamily: fonts.text,
  },
});