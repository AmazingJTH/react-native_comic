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
  View,
  Image,
} from 'react-native';
// import App from './comic1/app.js';
import App from './comic1/app.js';
// import styles from './app/Styles/discoverystyle.js';

export default class douban extends Component {

  render() {
    return (

        <App />

    );
  }
}

AppRegistry.registerComponent('douban', () => douban);
