import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Checkin extends Component {
    static navigationOptions= {
        headerStyle: {
            backgroundColor: '#FF8694'

        },
        
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

