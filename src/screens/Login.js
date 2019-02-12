import React, { Component } from 'react';
import {StyleSheet, Dimensions,StatusBar} from 'react-native'
import { Container, Header, Content, Form, Item, Input , Button,Text} from 'native-base';
export default class Login extends Component {
  static navigationOptions= {
    headerStyle: {
      backgroundColor: '#000'
    }
  }
  render() {
    const {height: screenHeight} = Dimensions.get('window')
    return (
      <Container style={{backgroundColor:'#fff' }}>
        <Header />
        <Content>
          <Form style={{flex: 1, height: screenHeight, justifyContent: "center" }}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button onPress={()=>this.props.navigation.navigate('Dashboard')} transparent dark block ><Text>Prijava</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#fff'
   }
});