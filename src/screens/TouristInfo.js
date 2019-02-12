import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Button} from 'native-base'

export default class TouristInfo extends Component {
    static navigationOptions= {
        headerStyle: {
            backgroundColor: '#FF8694'

        },
        
    }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
        <Button onPress={()=>this.props.navigation.navigate('Checkin')}><Text>Dalje</Text></Button>
      </View>
    )
  }
}
