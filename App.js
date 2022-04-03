import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Dashboard from './components/dashboard';
import History from './components/history';
import Feed from './components/feed';

import Frontdashcam from './components/frontdashcam';

import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator({
  Dashboard: {screen: Dashboard, navigationOptions: {headerShown: false}},
  Feed: {screen: Feed, navigationOptions: {headerShown: false}},
  History: {screen: History, navigationOptions: {headerShown: false}},
  Frontdashcam: {screen: Frontdashcam, navigationOptions: {headerShown: false}}
},
{
  initialRoute: 'Dashboard'
}
);

export default createAppContainer(App);
