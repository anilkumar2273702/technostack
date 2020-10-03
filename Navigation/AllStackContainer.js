import React, { Component } from 'react';
// import { Dimensions, View, SafeAreaView, TouchableOpacity, Text, Alert, StatusBar } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../src/Screens/LoginScreen';
import Dashboard from '../src/Screens/DashboardScreen';

export default class AllStackContainer extends Component {
  render(){
    return <AppContainer />;
  }
}

const PreLoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => {
      return {
        title: "My Profile",
      }
    }
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  App: { screen: PreLoginStack }
})

const AppContainer = createAppContainer(AppSwitchNavigator);