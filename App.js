/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import store from './src/store';
//import DrinksList from './src/screens/DrinksList';
import AppNavigator from './src/navigator';

const App = () =>(
  <Provider store={store}>
    <AppNavigator/>
  </Provider>
);

export default App;