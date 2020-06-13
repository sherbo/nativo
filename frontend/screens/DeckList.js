import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import DeckPreview from '../components/DeckPreview';

export default function DeckList() {
	return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} />
      </View>
      <View >
        <DeckPreview />
        <DeckPreview />
        <DeckPreview />
      </View>
      <View><Text>Learn More Words!</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
})