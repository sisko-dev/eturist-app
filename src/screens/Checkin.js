import React, { Component } from "react";
import { View ,Alert} from "react-native";
import axios from "axios";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon,
  Button,
  Body,
  Title,
  Form,
  Label,
  Item,
  Input
} from "native-base";
import { ActivityIndicator } from "react-native";

export default class TouristInfo extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    name: '',
    surname: '',
    checkindate: '',
    checkoutdate: '',
    docnum: '',
    accommodation: '',
    loading: true,
    toggleRefresh: false
  };
  handleSubmit = () => {

  }
  
  render() {
    console.log(this.state)
    return (
      <Container>
        <Header style={{ backgroundColor: "#FF8694", height: 100 }}>
          <Left>
            <Button onPress={()=>this.props.navigation.navigate('AccommodationInfo')} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white", fontSize: 20 }}>Turist</Title>
          </Body>
          <Right ><Icon name="repeat"></Icon></Right>
        </Header>
        <Content>
          
            <Form>
              <Item floatingLabel>
                <Label>Ime</Label>
                <Input value={this.state.name} onChangeText={(e)=>this.setState({name: e})} />
              </Item>
              <Item floatingLabel>
                <Label>Prezime</Label>
                <Input value={this.state.surname} onChangeText={(e)=>this.setState({surname: e})}  />
              </Item>
              <Item floatingLabel>
                <Label>Broj dokumenta</Label>
                <Input value={this.state.docnum} onChangeText={(e)=>this.setState({docnum: e})} />
              </Item>
              <Item floatingLabel>
                <Label>Objekt</Label>
                <Input value={this.state.accommodation} onChangeText={(e)=>this.setState({accommodation: e})} />
              </Item>
              <Item floatingLabel>
                <Label>Datum dolaska</Label>
                <Input value={this.state.checkindate} onChangeText={(e)=>this.setState({checkindate: e})}  />
              </Item>
              <Item floatingLabel>
                <Label>Datum odlaska</Label>
                <Input value={this.state.checkoutdate} onChangeText={(e)=>this.setState({checkoutdate: e})} />
              </Item>
              
            </Form>

          
        </Content>
        <Button style={{position: 'absolute', bottom: 20, right: 130}}  onPress={()=>this.handleSubmit()}  info><Text>Dodaj gosta</Text></Button>

      </Container>
    );
  }
}
