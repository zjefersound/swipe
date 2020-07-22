import React from 'react';
import { Provider } from 'react-redux';
import {
  StatusBar,
} from 'react-native';
import colors from './src/configs/colors';

import Routes from './src/routes';
import storeConfig from './src/store/storeConfig';

const store = storeConfig();

const Redux = () => (
  <Provider store={store}>
    <StatusBar 
      barStyle = { colors.secondary > "#888" ? "dark-content" : "light-content" } 
      backgroundColor = {colors.secondary} 
    />
    <Routes /> 
  </Provider>
);

const App = () => {
  return (
    <Redux />
  );
};

export default App;
