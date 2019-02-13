import React, { Component } from 'react'
import axios from 'axios'
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
  import { ActivityIndicator } from "react-native";

export default class AccommodationInfo extends Component {
    static navigationOptions={
      header: null
    }
    state={
        loading: true,
        accommodation: null,
        data: [],
        toggleRefresh: false

    }

    componentDidMount =()=>{
      this.fetchata()
      }
    fetchata = () => {
      const accommodation = this.props.navigation.getParam('accommodation')
      if(accommodation){
          axios.get(`http://localhost:5656/api/tourists/accommodation/${accommodation}`)
          .then(response=>{
              console.log(response)
              this.setState({data : response.data})
              this.setState({loading: false})
          })
          

      }

    }
    handleTourist = (id) => {
      this.props.navigation.navigate('TouristInfo',{
        id: id
      })
    }
  render() {
      console.log(this.state.data)
      console.log(this.state)
    return (
        <Container>
        <Header style={{ backgroundColor: "#FF8694", height: 100 }}>
          <Left>
            <Button onPress={()=>this.props.navigation.navigate('Dashboard')} transparent>
              <Icon  name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'white', fontSize: 20}}>Pregled</Title>
          </Body>
          <Right><Icon  onPress={()=>this.fetchata()}  name="repeat"></Icon></Right>
        </Header>
        <Content>
        <Text>{this.state.data.length}</Text>
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
            <List>
            <ListItem itemHeader first>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>GOSTI</Text>
            </ListItem>

              {this.state.data.accommodationInfo.map((record, key) => (
                <ListItem onPress={()=>this.handleTourist(record._id)} key={record._id}>
                  <Text style={{fontSize: 20}}>{record.name} {record.surname}   </Text>
                  <Right style={{position:'absolute', right: 10}}><Icon name="arrow-forward"/></Right>
                </ListItem>
                

              ))}
            </List>
          )}
        </Content>
        <Button info style={{position:'absolute', bottom: 10, right: 20}} ><Text>Novi check-in</Text></Button>

      </Container>
    )
  }
}
