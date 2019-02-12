import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  StatusBar,
  ActivityIndicator
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
     this.setState({loading: true})
    console.log(auth.state);
    if (auth.state.error === null) {
      setTimeout(()=>{
        this.props.navigation.navigate("Dashboard");
        this.setState({loading: false})
      },1000)
    }
    else{alert(auth.state.error)
    await this.setState({
      loading: false
    })
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
              {console.log(auth)}
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
                  <Button
                    onPress={() => this.handleSubmit(auth)}
                    transparent
                    dark
                    block
                  >
                    <Text>Prijava</Text>
                  </Button>
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
