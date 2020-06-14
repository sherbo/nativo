import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native';

export default function FlashCard() {
	return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('../assets/rojo.png')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})