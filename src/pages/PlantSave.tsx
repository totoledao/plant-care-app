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
import { useNavigation, useRoute } from '@react-navigation/core';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { isBefore, format } from 'date-fns';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import waterDrop from '../assets/waterdrop.png';

import { Button } from '../components/Button';
import { PlantProps, savePlant } from '../libs/storage';

interface Params {
  plant: PlantProps; 
}

export function PlantSave () {

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  
  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(event: Event, dateTime:Date | undefined ) {
   
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma hora no futuro! ⏰')
    }
    
    if (dateTime) {
      setSelectedDateTime(dateTime)
    }   
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSavePlant() {
    try {
      await savePlant ({
        ...plant,
        dateTimeNotification: selectedDateTime
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo Certo',
        subTitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        buttonTitle: 'Muito obrigado',
        icon: 'plant',
        nextScreen:'MyPlants'
        }      
      );
    

    } catch {
      Alert.alert('Não foi possível salvar 🤔')
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container} 
    >
      <View style={styles.container}>
      <View style={styles.plantInfo}>

        <SvgFromUri
          uri={plant.photo}
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          {plant.name}
        </Text>

        <Text style={styles.plantAbout}>
          {plant.about}
        </Text>

      </View>

      <View style={styles.controlers}>
        <View style={styles.tipContainers}>
          <Image
            source={waterDrop}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            {plant.water_tips}
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado
        </Text>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode='time'
          display='spinner'
          onChange={handleChangeTime}
        />
      )}

      {Platform.OS === 'android' && (
          <TouchableOpacity
            style={styles.dataTimePickerButton}
            onPress={handleOpenDateTimePickerForAndroid}
          >
              <Text style={styles.dataTimePickerText}>
                {`Mudar ${format(selectedDateTime, 'HH:mm')}`} 
              </Text>
          </TouchableOpacity>
        )
      }

        <Button
          style={styles.button}
          title='Cadastrar planta'
          onPress={handleSavePlant}
        />

      </View>
      </View>
    </ScrollView>
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
    bottom: 60
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
    height: 56
  },
  dataTimePickerButton: {
    width: "100%",
    alignItems: 'center',
    paddingVertical: 40    
  },
  dataTimePickerText: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text
  }
});