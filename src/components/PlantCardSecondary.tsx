import React from 'react';
import {  
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { SvgFromUri } from 'react-native-svg';
import { Feather } from '@expo/vector-icons';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
  handleRemove: ()=> void;
}

export const PlantCardSecondary = ({ data, handleRemove, ...rest } : PlantProps) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={()=> (
        <Animated.View>
          <View>

            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >

              <Feather
                name='trash'
                size={32}
                color={colors.white}
              />

            </RectButton>

          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.button} {...rest}>

        <SvgFromUri
          uri={data.photo}
          width={50}
          height={50}
        />
      
        <Text style={styles.title}>
          {data.name}
        </Text>

        <View style={styles.details}>

          <Text style={styles.timeLabel}>
            Regar às
          </Text>
          
          <Text style={styles.time}>
            {data.hour}
          </Text>

        </View>

      </RectButton>
      </Swipeable>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 35,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.shape,
    marginVertical: 5
  },
  title: {
      marginLeft: 10,
      fontFamily: fonts.heading,
      fontSize: 17,
      color: colors.heading
  },
  details: {
    flex: 1,
    alignItems: 'flex-end'
  },
  timeLabel: {
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light
  },
  time: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.heading,
    color: colors.body_dark
  },
  buttonRemove: {
    width: 100,
    height: 120,
    paddingLeft: 30,
    marginEnd: -35,
    backgroundColor: colors.red,
    marginTop: 5,
    borderRadius: 20,     
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 35
  }
})