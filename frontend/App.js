import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Purchase from './screens/Purchase';
import FlashCard from './screens/FlashCard';
import Navbar from './components/Navbar'; 

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        
        <FlashCard />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
