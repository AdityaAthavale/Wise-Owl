/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './src/containers/AppContainer';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

class WiseOwl extends Component {

  constructor(props) {
    super(props);
    this.store = configureStore();
  }
  render() {
    return (
      <Provider store={this.store}>
        <AppContainer {...this.props} />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('WiseOwl', () => WiseOwl);
