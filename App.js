import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: '#000000'
        }}>
        <Text style={{color: '#ff0000',}}>Hello, Pradeep!</Text>
      </View> 
    );
  }
}

export default HelloWorldApp;
