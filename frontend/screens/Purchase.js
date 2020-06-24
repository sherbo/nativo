import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native';

import Navbar from '../components/Navbar';
import DeckOption from '../components/DeckOption';

import { fetchPurchaseDecks } from '../utils/api';

export default class Purchase extends React.Component {
	state = {
    decks: []
  };

  async componentDidMount() {
    const decks = await fetchPurchaseDecks();

    this.setState({ decks });
  }

  renderDeck = ({ item }) => {
    const { navigation } = this.props;
    const { id, name, country, price } = item;

    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <DeckOption style={{flex: 5, marginRight: 5}} name={name} country={country} />
        <View style={{backgroundColor: '#ffefc9', height: 60, justifyContent: 'center', paddingLeft: 10, paddingRight: 10}}>
          <Text style={{fontSize: 18}}>{price}</Text>
        </View>
      </View>
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
