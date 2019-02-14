import React, { Component } from "react";
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
  Title
} from "native-base";
import { ActivityIndicator, TouchableOpacity } from "react-native";
import axios from "axios";
import styled from "styled-components";


export default class ListItemSelectedExample extends Component {
  state = {
    accommodations: [],
    loading: true,
    error: null,
    accommodations: []
  };

  static navigationOptions = {
    header: null
  };

  componentDidMount = async () => {
    await this.setState({ loading: true });
    await axios
      .get("http://localhost:5656/api/tourists/2")
      .then(response => {
        console.log("response", response);
        this.setState({ accommodations: response.data });
        this.setState({ loading: false });
      })

      .catch(error => {
        this.setState({ error: error });
      });
  };

  accommodationInfo = accommodation => {
    this.props.navigation.navigate("AccommodationInfo", {
      accommodation: accommodation
    });
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        
        <Header style={{ backgroundColor: "#FF8694", height: 100 }}>
          <Left>
            <Button  transparent>
              <Icon  name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'white', fontSize: 20}}>Dashboard</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
            <List >
            <ListItem itemHeader first>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>OBJEKTI</Text>
            </ListItem>
              {this.state.accommodations.map((record, key) => (
                <ListItem
                  onPress={() => this.accommodationInfo(record)}
                  key={record}
                > 
                  <Text style={{fontSize: 20}}>{record}</Text>
                  <Right style={{position:'absolute', right: 10}}><Icon name="arrow-forward"/></Right>

                </ListItem>
              ))}
            </List>
          )}
        </Content>
        <Button info style={{position:'absolute', bottom: 10, right: 20}} onPress={()=>this.props.navigation.navigate('Checkin')} ><Text>Novi check-in</Text></Button>

      </Container>
    );
  }
}
