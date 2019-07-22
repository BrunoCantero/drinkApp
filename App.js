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
import DrinksList from './src/screens/DrinksList';

const App = () =>(
  <Provider store={store}>
    <DrinksList/>    
  </Provider>
);

export default App;