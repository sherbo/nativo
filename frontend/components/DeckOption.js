import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import getCountryImage from '../utils/getCountryImage';

export default function DeckOption({ 
  id, 
  name, 
  country,
  image,
  onPress,
  style
}) {
	return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.image} source={getCountryImage(country)} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffefc9',
    marginBottom: 5,
    width: '100%'
  },
  image: {
    height: 60,
    width: 80,
    marginRight: 10
  },
  text: {
    fontSize: 18
  }
})