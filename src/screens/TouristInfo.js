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
    data: null,
    loading: true,
    toggleRefresh: false
  };
  componentDidMount = () => {
   this.fetchData()
  };

  fetchData = () => {
    const id = this.props.navigation.getParam("id");
    if (id) {
      this.setState({ loading: true });
      axios
        .get(`http://localhost:5656/api/tourists/${id}`)
        .then(res => {
          this.setState({ data: res.data });
          this.setState({ loading: false });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  handleDelete = async (id) =>{
    this.setState({loading: true})
    axios.delete(`http://localhost:5656/api/tourists/${id}`)
    .then(()=>{
        this.setState({loading:  false})
        Alert.alert(
            'Obavijest',
            'Kontakt izbrisan',
            [
              {text: 'OK', onPress: () => this.props.navigation.navigate('AccommodationInfo')},
            ],
            {cancelable: false},
          );
    })
    
    
  }
  render() {
    const { data } = this.state;
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
          <Right onPress={()=>this.fetchData()} ><Icon name="repeat"></Icon></Right>
        </Header>
        <Content>
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
            <Form>
              <Item floatingLabel>
                <Label>Ime</Label>
                <Input value={data.name} />
              </Item>
              <Item floatingLabel>
                <Label>Prezime</Label>
                <Input value={data.surname} />
              </Item>
              <Item floatingLabel>
                <Label>Broj dokumenta</Label>
                <Input value={data.docnum} />
              </Item>
              <Item floatingLabel>
                <Label>Objekt</Label>
                <Input value={data.accommodation} />
              </Item>
              <Item floatingLabel>
                <Label>Datum dolaska</Label>
                <Input value={data.checkindate} />
              </Item>
              <Item floatingLabel>
                <Label>Datum odlaska</Label>
                <Input value={data.checkoutdate} />
              </Item>
            </Form>
          )}
        </Content>
        <Button info style={{ position: "absolute", bottom: 10, left: 20 }}>
          <Text>Check out</Text>
        </Button>

        <Button onPress={()=>this.handleDelete(data._id)} danger style={{ position: "absolute", bottom: 10, right: 20 }}>
          <Text>Izbrisi </Text>
        </Button>
      </Container>
    );
  }
}
