import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';

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

  onAnswerChosen = answer => {
    const { currentCard } = this.state;
    // Record the answer to the system
    // do api shit here
    // Go to the next card
    this.setState({ currentCard: currentCard + 1 });
  }

  render() {
    const { cards, currentCard } = this.state;

    const card = Object.keys(cards).map((key) => {
      if (key === currentCard.toString()) {
        return (
          <FlashCard 
            word={cards[key].word}
            ipa={cards[key].ipa}
            example={cards[key].example}
            onPress={this.onAnswerChosen}
          />
        )
      }
    })

    return ( 
      <SafeAreaView style={styles.container}>
        {card}
      </SafeAreaView>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})