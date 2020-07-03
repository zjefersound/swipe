import React from 'react';
import {
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import colors from './src/configs/colors';

import Routes from './src/routes';

const App = () => {
  return (
      <>
        <StatusBar 
          barStyle = { colors.secondary > "#888" ? "dark-content" : "light-content" } 
          backgroundColor = {colors.secondary} 
        />
        <Routes />
      </>
  );
};

export default App;
