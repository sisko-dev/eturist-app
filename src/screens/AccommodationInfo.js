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
    Button
  } from "native-base";
  import { ActivityIndicator } from "react-native";

export default class AccommodationInfo extends Component {

    state={
        loading: true,
        accommodation: null,
        data: []
    }

    componentDidMount =()=>{
        const accommodation = this.props.navigation.getParam('accommodation')
        if(accommodation){
            axios.get(`http://localhost:5656/api/tourists/accommodation/${accommodation}`)
            .then(response=>{
                
                this.setState({data : response.data})
                this.setState({loading: false})
            })

        }
    }

  render() {
      console.log(this.state.data)
    return (
        <Container>
        <Content>
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
            <List>
              {this.state.data.map((record, key) => (
                <ListItem onPress={()=>console.log('ss')} key={key}>
                  <Text>{record.name} {record.surname} </Text>
                </ListItem>
              ))}
            </List>
          )}
        </Content>
      </Container>
    )
  }
}
