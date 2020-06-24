import React from 'react';
import { StyleSheet, SafeAreaView, View, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Navbar from '../components/Navbar';
import DeckOption from '../components/DeckOption';

import { fetchUserDecks } from '../utils/api';

export default class DeckEditor extends React.Component {
  state = {
    decks: []
  };

  async componentDidMount() {
    const decks = await fetchUserDecks();

    this.setState({ decks });
  }

  renderDeck = ({ item }) => {
    const { id, name, country, image } = item;

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <DeckOption style={{flex: 5, marginRight: 5}} name={name} country={country} />
        <AntDesign name='minuscircle' size={40} color='red' />
      </View>
    );
  }

  render() {
    const { navigation } = this.props;
    const { decks } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Navbar />
        <View style={styles.deckContainer}>
          <FlatList
            data={decks}
            renderItem={this.renderDeck}
            keyExtractor={item => item.id.toString()}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
            <DeckOption style={{flex: 5}} name='2000 Most Freq...' country='England' />
            <AntDesign name='pluscircle' size={40} color='#00cf49' />
          </View>
        </View>
      </SafeAreaView>
    )
  }
	
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  deckContainer: {
    flex: 1,
    marginTop: 30,
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-between'
  }
});