import React, { Component } from "react";
import { View, Alert } from "react-native";
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
import MyDatePicker from "../components/MyDatePicker";
import DatePicker from "react-native-datepicker";

export default class TouristInfo extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    name: "",
    surname: "",
    checkindate: "",
    checkoutdate: "",
    docnum: "",
    doctype: "",
    accommodation: "",
    loading: false,
    toggleRefresh: false,
    error: {
      name: false,
      surname: false,
      docnum: false,
      doctype: false,
      checkindate: false,
      checkoutdate: false,
      accommodation: false

    }
  };
  handleSubmit = () => {
    let error = {...this.state.error}
    if(this.state.name === ''){ 
      error.name = true
      this.setState({error})
    }
    if(this.state.surname === '') {
      error.surname = true
      this.setState({error})
    }
    if(this.state.docnum === '') {
      error.docnum = true
      this.setState({error})    }
    if(this.state.doctype === '') {
      error.doctype = true
      this.setState({error})
    
    }
    if(this.state.checkindate === '') {
      error.checkindate = true
      this.setState({error})
    }
    if(this.state.checkoutdate === '') {
      error.checkoutdate = true
      this.setState({error})
    }
    if(this.state.accommodation === '') {
      error.accommodation = true
      this.setState({error})
    }
    if(this.state.name !== ''){ 
      error.name = false
      this.setState({error})
    }
    if(this.state.surname !== '') {
      error.surname = false
      this.setState({error})
    }
    if(this.state.docnum !== '') {
      error.docnum = false
      this.setState({error})    }
    if(this.state.doctype !== '') {
      error.doctype = false
      this.setState({error})
    
    }
    if(this.state.checkindate !== '') {
      error.checkindate = false
      this.setState({error})
    }
    if(this.state.checkoutdate !== '') {
      error.checkoutdate = false
      this.setState({error})
    }
    if(this.state.accommodation !== '') {
      error.accommodation = false
      this.setState({error})
    }
    
    if(!error.name && !error.surname && !error.accommodation && !error.docnum && !error.doctype && !error.checkindate && !error.checkoutdate){
      const data = {
        name: this.state.name,
        surname: this.state.surname,
        accommodation: this.state.accommodation,
        docnum: this.state.docnum,
        doctype: this.state.doctype,
        checkindate: this.state.checkindate,
        checkoutdate: this.state.checkoutdate,
        checkedin: true
      }
      this.setState({loading: true})
      axios.post('http://localhost:5656/api/tourists/',data)
      .then(res=>{
        this.setState({loading:  false})
        Alert.alert(
          'Obavijest',
          'Novi gost dodan',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('AccommodationInfo')},
          ],
          {cancelable: false},
        );
      }).catch(error=>console.log(error))
    }
    console.log(this.state.error)
  };

  componentDidMount=()=>{
    const accommodation = this.props.navigation.getParam('accommodation')
    if(accommodation) this.setState({accommodation: accommodation})
    
  }

  render() {
    
    console.log(this.state);
    return (
      <Container>
        <Header style={{ backgroundColor: "#FF8694", height: 100 }}>
          <Left>
            <Button
              onPress={() =>
                this.props.navigation.navigate("AccommodationInfo")
              }
              transparent
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white", fontSize: 20 }}>Turist</Title>
          </Body>
          <Right>
            <Icon name="repeat" />
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Ime</Label>
              <Input
                value={this.state.name}
                onChangeText={e => this.setState({ name: e })}
              />
              {this.state.error.name && <Icon name="close-circle" ></Icon>}
            </Item>
            <Item floatingLabel>
              <Label>Prezime</Label>
              <Input
                value={this.state.surname}
                onChangeText={e => this.setState({ surname: e })}
              />
              {this.state.error.surname && <Icon name="close-circle" ></Icon>}
            </Item>
            <Item floatingLabel>
              <Label >Tip dokumenta</Label>
              <Input 
                value={this.state.doctype}
                onChangeText={e => this.setState({ doctype: e })}
              />
              {this.state.error.doctype && <Icon name="close-circle" ></Icon>}
            </Item>
            <Item floatingLabel>
              <Label>Broj dokumenta</Label>
              <Input
                value={this.state.docnum}
                onChangeText={e => this.setState({ docnum: e })}
              />
              {this.state.error.docnum && <Icon name="close-circle" ></Icon>}
            </Item>
            <Item floatingLabel>
              <Label>Objekt</Label>
              <Input
                value={this.state.accommodation}
                onChangeText={e => this.setState({ accommodation: e })}
              />
              {this.state.error.accommodation && <Icon name="close-circle" ></Icon>}
            </Item>
            <Item  style={{padding:5}} fixedLabel>
              <Label>Datum dolaska</Label>
              <DatePicker
                date={this.state.checkindate}
                onDateChange={date => this.setState({ checkindate: date })}
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                 
                }}
                confirmBtnText='OK'
                cancelBtnText='Cancel'
              />
              {this.state.error.checkindate && <Icon name="close-circle" ></Icon>}
            </Item>
            <Item  style={{padding:5}} fixedLabel>
              <Label>Datum odlaska</Label>
              <DatePicker
                date={this.state.checkindate}
                onDateChange={date => this.setState({ checkoutdate: date })}
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                 
                }}
                confirmBtnText='OK'
                cancelBtnText='Cancel'
              />
              {this.state.error.checkoutdate && <Icon name="close-circle" ></Icon>}
            </Item>
          </Form>
        </Content>
        <Button
          style={{ position: "absolute", bottom: 20, right: 130 }}
          onPress={() => this.handleSubmit()}
          info
        >
          <Text>Dodaj gosta</Text>
        </Button>
      </Container>
    );
  }
}
