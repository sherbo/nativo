import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';

import Navbar from '../components/Navbar';
import DeckOption from '../components/DeckOption';
import AddPackButton from '../components/AddPackButton';

import { fetchUserDecks } from '../utils/api';

export default class Home extends React.Component {
  state = {
    decks: []
  };

  async componentDidMount() {
    const decks = await fetchUserDecks();

    this.setState({ decks });
  }

  renderDeck = ({ item }) => {
    const { navigation } = this.props;
    const { id, name, country } = item;

    return (
      <DeckOption name={name} country={country} onPress={() => navigation.navigate('Deck')} />
    );
  }

  render() {
    const { navigation } = this.props;
    const { decks } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Navbar onPress={() => navigation.navigate('Profile')} />
        <View style={styles.deckContainer}>
          <FlatList
            data={decks}
            renderItem={this.renderDeck}
            keyExtractor={item => item.id.toString()}
          />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={{fontSize: 21, marginRight: 15}}>Learn More Words!</Text>
            <AddPackButton onPress={() => navigation.navigate('Purchase')} />
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
})