import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
var teams = ['red', 'blue', 'green', 'yellow'];
export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> CHOOSE YOUR TEAM </Text>
        {teams.map((item, index) => (
          <View style={styles.button}>
            <Button
              title={item.toUpperCase()}
              color={item}
              onPress={() => this.props.navigation.navigate('Buzzer',{buttonColor:item})}
            />
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  button: {
    width: 200,
    height: 50,
  },
});
