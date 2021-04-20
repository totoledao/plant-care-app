import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';

interface ButtonProps {
  title: string;
}

export function Button({ title } : ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}>

        <Text style={styles.text}>
          { title }
        </Text>

      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  }
});