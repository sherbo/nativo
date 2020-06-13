import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';

import Navbar from '../components/Navbar';
import DeckOption from '../components/DeckOption';
import AddPackButton from '../components/AddPackButton';

export default function Home() {
	return (
    <SafeAreaView style={styles.container}>
      <View style={styles.deckContainer}>
        <DeckOption />
        <DeckOption />
        <DeckOption />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text style={{fontSize: 21, marginRight: 15}}>Learn More Words!</Text>
        <AddPackButton />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  deckContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})