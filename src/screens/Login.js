import React, { Component } from 'react';
import {StyleSheet, Dimensions,StatusBar} from 'react-native'
import { Container, Header, Content, Form, Item, Input , Button,Text} from 'native-base';
export default class FormExample extends Component {
  
  render() {
    const {height: screenHeight} = Dimensions.get('window')
    return (
      <Container style={{backgroundColor:'#669999' }}>
        <Header />
        <Content>
          <Form style={{flex: 1, height: screenHeight, justifyContent: "center" }}>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button block success><Text>OK</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#fafafa'
   }
});