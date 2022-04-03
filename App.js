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
import FrontDashcam from './components/front_dashcam';

const App = () => {
  return(
    <FrontDashcam/>
  );
}

export default App;
