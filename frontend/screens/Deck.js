import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';

import FlashCard from '../components/FlashCard';

import { fetchFlashCards } from '../utils/api';

export default class Deck extends React.Component {
  state = {
    cards: [],
    currentCard: 0
  };

  async componentDidMount() {
    const cards = await fetchFlashCards();

    this.setState({ cards });
  }

  render() {
    const { cards, currentCard } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FlashCard word='Perro' ipa='pe.ʁu' example='Tengo un perro.' />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})