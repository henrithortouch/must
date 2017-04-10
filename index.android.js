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
  Navigator
} from 'react-native';
import MainView from './MainView';
import Plim from './Plim';

//var MainView = require('./MainView');

class must extends Component {
  render() {	
    return(
		<Navigator
			style={{flex: 1}}
			initialRoute={{id: 'Main'}}
			renderScene={this.renderScene}
		/>
	)
  }
  
  renderScene(route, navigator) {
	switch(route.id) {
		case 'Main':
			return <MainView navigator={navigator} title="Pistelista" />;
		case 'Plim':
			return <Plim navigator={navigator} title="Sait pisteitä!" />;
	}
  }
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BC34A',
    padding: 20,
  },
  main: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF5722',
    margin: 10,
  },
});

AppRegistry.registerComponent('must', () => must);
