import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { useRoute } from '@react-navigation/core'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import waterDrop from '../assets/waterdrop.png';
import { Button } from '../componets/Button';

export function PlantSave () {
  return (
    <View style={styles.container}>
    <View style={styles.plantInfo}>

      <SvgFromUri
        uri=""
        height={150}
        width={150}
      />

      <Text style={styles.plantName}>
        Nome da Planta
      </Text>

      <Text style={styles.plantAbout}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Repellat rerum earum quae obcaecati.
        Beatae, illo asperiores quasi tenetur
      </Text>

    </View>

    <View style={styles.controlers}>
      <View style={styles.tipContainers}>
        <Image
          source={waterDrop}
          style={styles.tipImage}
        />
        <Text style={styles.tipText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Animi quisquam aperiam aliquam sequi non.
        </Text>
      </View>

      <Text style={styles.alertLabel}>
        Escolha o melhor horário para ser lembrado
      </Text>

      <Button
        style={styles.button}
        title='Cadastrar planta'
        onPress={() => {}}
      />

    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    color: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,    
  },
  plantName: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 15
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10
  },
  controlers: {
    backgroundColor: colors.white,
    padding: 20,

  },
  tipContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: '25%'
  },
  tipImage: {
    width: 56,
    height: 56
  },
  tipText: {
    flex: 1,
    marginLeft: 20,    
    fontFamily: fonts.text,
    color: colors.blue,   
    textAlign: 'justify',
    fontSize: 17    
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5
  },
  button:{
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,    
    height: 56,
  }
});