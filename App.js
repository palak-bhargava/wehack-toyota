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
import Recording from './components/recording';

const App = () => {
  return(
    <Feed/>
  );
}

export default App;
