/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';

import store from './store';
import TestScreen from './src/screens/TestScreen';

const App: () => React$Node = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <TestScreen />
        </SafeAreaView>
      </Provider>
    </React.Fragment>
  );
};

export default App;
