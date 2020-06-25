import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ActionButton from './ActionButton';

import getCardImage from '../utils/getCardImage';

export default class FlashCard extends React.Component {
  state = {
    answerChecked: true
  };

  onCardPress = () => {
    this.setState({ answerChecked: true });
  }

  onAnswerPress = () => {
    this.setState({ answerChecked: false })
  }

  render() {
    const { word, ipa, example } = this.props;
    const { answerChecked } = this.state;
    
    return (
      <View style={{flex: 1}}>
        {!answerChecked &&
          <TouchableOpacity style={styles.frontContainer} onPress={this.onCardPress}>
            <Image style={styles.image} source={getCardImage(word)} />
          </TouchableOpacity>
        }
        {answerChecked &&
          <View style={styles.backContainer}>
             <View style={styles.wordContainer}>
                <Text style={styles.word}>
                  Perro
                </Text>
                <View style={styles.ipaContainer}>
                  <Text style={styles.ipa}>
                    ˈpe.ʁu
                  </Text>
                  <TouchableOpacity style={styles.audioButton}>
                    <Ionicons name='ios-volume-high' size={30} color='white' style={styles.audioIcon} />
                  </TouchableOpacity>
               </View>
               <Text style={styles.example}>Tengo un perro</Text>
             </View>
             <View style={styles.actionContainer}>
              <ActionButton 
                text='Wrong' 
                textColor='white' 
                width='50%'
                buttonColor='#d63927'
                onPress={this.onAnswerPress}
                style={styles.actionButton}
              />
              <ActionButton 
                text='Right' 
                textColor='white'
                width='50%'
                buttonColor='#559c4f'
                onPress={this.onAnswerPress}
                style={styles.actionButton}
              />
            </View>
          </View>
         
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  frontContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 200,
    width: 200
  },
  backContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  wordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  word: {
    fontSize: 40,
    marginBottom: 40,
    textAlign: 'center'
  },
  ipaContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginBottom: 40
  },
  ipa: {
    fontSize: 18,
    marginRight: 20
  },
  audioButton: {
    backgroundColor: '#00a588', 
    width: 35, 
    height: 35, 
    borderRadius: 50
  },
  audioIcon: {
    marginLeft: 6, 
    marginTop: 2
  },
  example: {
    fontSize: 18,
    textAlign: 'center'
  },
  actionContainer: {
    flexDirection: 'row'
  }
})