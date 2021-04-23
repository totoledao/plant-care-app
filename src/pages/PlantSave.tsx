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
    justifyContent: 'space-around',
    color: colors.shape,
  },
  plantName: {

  },
  plantAbout: {

  },
  controlers: {

  },
  tipContainers: {

  },
  tipImage: {

  },
  tipText: {

  },
  alertLabel: {

  },
  button: {

  }
});

