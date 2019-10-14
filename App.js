import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './components/MainScreen';



const AppStackNavigator = createStackNavigator({
  Main: {screen: MainScreen},
  // Profile: {screen: ProfileScreen},
});

const App = createAppContainer(AppStackNavigator);

export default App;
