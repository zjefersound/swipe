import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Header from './src/components/Header';
import Post from './src/components/Post';

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
      <StatusBar barStyle="dark-content" backgroundColor = '#FFF' />
      <Header />
      <Post commentList = { commentList } image = {require('./src/assets/imgs/gate.jpg')}/>
    </>
  );
};

export default App;
