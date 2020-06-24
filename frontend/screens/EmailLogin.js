import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, TextInput } from 'react-native';

import ActionButton from '../components/ActionButton';

export default class EmailLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onLogin() {
    const { username, password } = this.state;
    
  }

	render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.inputContainer}>
          <ActionButton icon='md-mail' iconColor='white' buttonColor='#d91224' />
          <TextInput 
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'User:'}
            placeholderTextColor='black'
            style={styles.input}
          />
          <TextInput 
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password:'}
            secureTextEntry={true}
            placeholderTextColor='black'
            style={styles.input}
          />
          <ActionButton text='Login' textColor='black' buttonColor='#ffefc9' onPress={() => navigation.navigate('Home')} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30
  },
  inputContainer: {
    color: 'yellow',
    width: '80%'
  },
  input: {
    color: 'black',
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
});