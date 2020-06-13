import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function DeckPreview() {
	return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/spanishFlag.png')} />
      <Text style={{fontSize:18}}>2000 Most Frequent</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffefc9',
    marginBottom: 5
  },
  image: {
    height: 60,
    width: 70,
    marginRight: 10
  }
})