import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Home from './Screens/Home';
import {Provider} from 'react-redux';
import store from './store';
import Navigation from './Screens/navigationConfig.js/Navigation';
export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
