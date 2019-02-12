import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Button} from 'native-base'

export default class TouristInfo extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button onPress={()=>this.props.navigation.navigate('Checkin')}><Text>Dalje</Text></Button>
      </View>
    )
  }
}
