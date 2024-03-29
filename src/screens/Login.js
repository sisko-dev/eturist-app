import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";
import { Subscribe } from "unstated";
import AuthContainer from "../containers/AuthContainer";

export default class Login extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#000"
    }
  };
  state = {
    oib: "",
    password: "",
    loading: false
  };
  handleSubmit = async auth => {
    await auth.login(this.state);
    this.setState({ loading: true });
    console.log(auth.state);
    if (auth.state.error === null) {
      setTimeout(() => {
        this.props.navigation.navigate("Dashboard");
        this.setState({ loading: false });
      }, 1000);
    } else {
      alert(auth.state.error);
      await this.setState({
        loading: false
      });
    }
  };
  render() {
    const { height: screenHeight } = Dimensions.get("window");
    console.log(this.state);
    return (
      <Subscribe to={[AuthContainer]}>
        {auth => (
          <Container style={{ backgroundColor: "#fff" }}>
            <Header />
            <Content>
              <Image style={{height: 550, width: 300 , position: 'absolute', margin: 0, right: 50, top: 20}} source={require('../img/logo.png')}>
                
              </Image>
              <Form
                style={{
                  flex: 1,
                  height: screenHeight,
                  justifyContent: "center"
                }}
              >
                <Item>
                  <Input
                    onChangeText={text => this.setState({ oib: text })}
                    placeholder="Oib"
                    value={this.state.oib}
                  />
                </Item>
                <Item last>
                  <Input
                    onChangeText={text => this.setState({ password: text })}
                    placeholder="Password"
                    value={this.state.password}
                  />
                </Item>
                {this.state.loading ? (
                  <ActivityIndicator />
                ) : (
                  <TouchableOpacity
                    onPress={() => this.handleSubmit(auth)}
                    style={{position: 'absolute', bottom: 180 , right: 130, width: 120, height: 50, backgroundColor: '#FF8694', flex: 1, justifyContent:'center',alignItems:'center', borderRadius: 5}}
          
                  >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Prijava</Text>
                  </TouchableOpacity>
                )}
              </Form>
            </Content>
          </Container>
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
