import React, { Component } from 'react';
import {
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { Audio } from 'expo-av';
// import { db } from './config';
import Firebase from 'firebase';

// let addItem = item => {
//   db.ref('/items').push({
//     name: item
//   });
// };
var rank = 1;
export default class Buzzer extends Component {
  componentWillMount() {
   
  }
  //   catch(err){ Firebase App named '[DEFAULT]' already exists (app/duplicate-app).}
  // }

  constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      buttonColor: this.props.navigation.getParam('buttonColor'),
    };
  }

  // Submit = () => {
  //     addItem(this.state.name);
  //     console.log('Item saved successfully');
  //   };

  playSound = async () => {
    console.log('playing');
    const soundObject = await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: this.state.buttonColor }]}
          onPress={this.playSound}>
          <Text
            style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
            PRESS ME
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 200,
    marginTop: 100,
    borderRadius: 200,
    justifyContent: 'center',
    backgroundColor: 'pink',
    paddingHorizontal: 15,
  },
});
