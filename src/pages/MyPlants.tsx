import { formatDistance } from 'date-fns/esm';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import React, { useEffect, useState } from 'react';
import{
   View,
   StyleSheet,
   Text,
   Image,
   FlatList
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import waterDrop from '../assets/waterdrop.png';
import { Header } from '../componets/Header';
import { PlantCardSecondary } from '../componets/PlantCardSecondary';
import { PlantProps, loadPlant } from '../libs/storage';

export function MyPlants() {

  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStored = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStored[0].dateTimeNotification).getTime(),
        new Date().getTime(),
          { locale : ptBR }
      );

      setNextWatering(
        `Não esqueça de regar a ${plantsStored[0].name} às ${nextTime} horas.`
      )

        setMyPlants(plantsStored);
        setLoading(false);

    }

    loadStorageData();

  },[])

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.spotLightContainer}>

        <Image 
          source={waterDrop}
          style={styles.spotLightImage}
        />
        <Text style={styles.spotLightText}>
          {nextWatering}
        </Text>

      </View>

      <View style={styles.plants}>

        <Text style={styles.plantsTitle}>
          Próximas regas
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex:1 }}

        />

      </View>

    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
  spotLightContainer: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'   

  },
  spotLightImage: {
    width: 60,
    height: 60
  },
  spotLightText: {
    flex: 1,
    color: colors.blue,
    paddingHorizontal: 20
  },
  plants: {
    flex: 1,
    width: '100%'
  },
  plantsTitle: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginVertical: 20 
  }
});