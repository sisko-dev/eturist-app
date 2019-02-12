
import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator
  } from "react-navigation";
  
  import Login from "./screens/Login";  

  const Navigator = createSwitchNavigator({
    Login: Login,
    // Dashboard: StackNavigator
  });

  export default class App extends Component{
      render(){
          return <Navigator/>
      }
  }
  