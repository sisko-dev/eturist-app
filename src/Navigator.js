
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Provider} from 'unstated'

import {
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator
  } from "react-navigation";

  import Login from "./screens/Login";  
  import TouristInfo from './screens/TouristInfo'
  import Checkin from './screens/Checkin'
  const Dashboard= createStackNavigator({
      TouristInfo: TouristInfo,
      Checkin: Checkin
  })
  const Navigator = createSwitchNavigator({
    Login:{
        screen: Login,
        title: 'Login'
    },
    Dashboard: Dashboard
  });

  export default class App extends Component{
      render(){
          return <Provider>
              <Navigator/>
          </Provider>
      }
  }
  