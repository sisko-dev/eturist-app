
import React, { Component } from 'react'
import { Text, View ,YellowBox} from 'react-native'
import {Provider} from 'unstated'

import {
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator
  } from "react-navigation";

  import Login from "./screens/Login";  
  import Dashboard from './screens/Dashboard'
  import Checkin from './screens/Checkin'
  import AccommodationInfo from './screens/AccommodationInfo'
  import TouristInfo from './screens/TouristInfo'

  const DashboardNavigator= createStackNavigator({
      Dashboard: Dashboard,
      Checkin: Checkin,
      AccommodationInfo: AccommodationInfo,
      TouristInfo: TouristInfo
  })
  const Navigator = createSwitchNavigator({
    Login:{
        screen: Login,
        title: 'Login',
        header: null
    },
    Dashboard: DashboardNavigator
  });
  console.disableYellowBox = true
  export default class App extends Component{
      render(){
          return <Provider>
              <Navigator/>
          </Provider>
      }
  }
  