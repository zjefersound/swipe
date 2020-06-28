import React from 'react';
import {
  StatusBar,
  ScrollView
} from 'react-native';

import Header from './src/components/Header';
import Post from './src/components/Post';

import fonts from './src/configs/colors';
import colors from './src/configs/colors';
const App = () => {
  const commentList = [
      {
          nickname: 'zika',
          text: 'sdsd'
      },
      {
          nickname: 'pablito',
          text: 'sdsd dsdddjfjdsjfsjfjdssdsmdmdmd d d d d dd  as dasdaasda jfdsjfsjfjsj jdsjfjsdfjs jsdjsjas sad a asaa'
      },
  ]
  return (
    <>
      <StatusBar 
        barStyle = { colors.secondary > "#888" ? "dark-content" : "light-content" } 
        backgroundColor = {colors.secondary} 
      />
      <Header />
      <ScrollView style = {{backgroundColor: colors.secondary}}>
        <Post 
          email = 'jefeacdc@gmail.com'
          nickname = 'zjefersound'
          commentList = { commentList } 
          image = {require('./src/assets/imgs/gate.jpg')}/>
        <Post 
          email = 'jefeacdc@gmail.com'
          nickname = 'zjefersound'
          commentList = { commentList } 
          image = {require('./src/assets/imgs/boat.jpg')}/>
        <Post 
          email = 'jefeacdc@gmail.com'
          nickname = 'zjefersound'
          commentList = { commentList } 
          image = {require('./src/assets/imgs/fence.jpg')}/>
      </ScrollView>
    </>
  );
};

export default App;
