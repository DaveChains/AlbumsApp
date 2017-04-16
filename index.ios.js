/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// index.ios.js
// Import Library to help create components
import {
    AppRegistry,
    View
} from 'react-native';

import React from 'react';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// create component
const APP = () => {
  return (
      <View>
          <Header headerText={'Albums'} />
          <AlbumList />
      </View>
  );
};
// render component
AppRegistry.registerComponent('AlbumsApp', () => APP);

