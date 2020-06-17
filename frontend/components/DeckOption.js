import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function DeckOption({ onPress }) {
	return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={require('../assets/spanishFlag.png')} />
      <Text style={{fontSize:18}}>2000 Most Frequent</Text>
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
  }
})