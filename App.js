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

const App = () => {
  return(
    <Dashboard/>
  );
}

export default App;
