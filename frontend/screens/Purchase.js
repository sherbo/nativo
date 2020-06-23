import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Navbar from '../components/Navbar';
import DeckOption from '../components/DeckOption';

export default function Purchase() {
	return (
    <SafeAreaView>
      <Navbar />
      <DeckOption />
      <DeckOption />
      <DeckOption />
      <DeckOption />
    </SafeAreaView>
  )
}