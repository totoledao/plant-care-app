import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import { PlantSelect } from '../pages/PlantSelect';
import { MyPlants } from '../pages/MyPlants';

import colors from '../../styles/colors';

const appTab = createBottomTabNavigator();

const AuthRoutes = () => {
  
  return (
    <appTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style:{
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 88
        }
      }}>

      <appTab.Screen
        name='Nova Planta'
        component={PlantSelect}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name='add-circle-outline'
              size={size}
              color={color}
            />
          ))
        }}
      />

      <appTab.Screen
        name='Minhas Planta'
        component={MyPlants}
        options={{
          tabBarIcon: (({ size, color }) => (
            <MaterialIcons
              name='format-list-bulleted'
              size={size}
              color={color}
            />
          ))
        }}
      />

    </appTab.Navigator>
    
  )
}

export default AuthRoutes;