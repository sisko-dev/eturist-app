
import React, { Component } from 'react'
import { Text, View ,YellowBox} from 'react-native'
import {Provider} from 'unstated'

import {
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator
  } from "react-navigation";

  import Login from "./screens/Login";  
  import TouristInfo from './screens/TouristInfo'
  import Checkin from './screens/Checkin'
  import AccommodationInfo from './screens/AccommodationInfo'

  const Dashboard= createStackNavigator({
      TouristInfo: TouristInfo,
      Checkin: Checkin,
      AccommodationInfo: AccommodationInfo
  })
  const Navigator = createSwitchNavigator({
    Login:{
        screen: Login,
        title: 'Login'
    },
    Dashboard: Dashboard
  });
  console.disableYellowBox = true
  export default class App extends Component{
      render(){
          return <Provider>
              <Navigator/>
          </Provider>
      }
  }
  