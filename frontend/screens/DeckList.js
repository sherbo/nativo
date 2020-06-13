import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';

import DeckPreview from '../components/DeckPreview';
import AddPackButton from '../components/AddPackButton';

export default function DeckList() {
	return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={require('../assets/logo.png')} />
        <Image source={require('../assets/userAvatar.png')} />
      </View>
      <View style={styles.deckContainer}>
        <DeckPreview />
        <DeckPreview />
        <DeckPreview />
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