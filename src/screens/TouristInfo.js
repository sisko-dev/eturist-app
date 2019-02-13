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
  Button
} from "native-base";
import { ActivityIndicator } from "react-native";
import axios from "axios";
export default class ListItemSelectedExample extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#FF8694"
    }
  };
  state = {
    accommodations: [],
    loading: true,
    error: null,
    accommodations: []
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


  accommodationInfo = (accommodation) =>{
    this.props.navigation.navigate('AccommodationInfo',{
      accommodation: accommodation
    })
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Content>
          {this.state.loading ? (
            <ActivityIndicator />
          ) : (
            <List>
              {this.state.accommodations.map((record, key) => (
                <ListItem onPress={()=>this.accommodationInfo(record)} key={record}>
                  <Text>{record}</Text>
                </ListItem>
              ))}
            </List>
          )}
        </Content>
      </Container>
    );
  }
}
