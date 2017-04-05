/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// index.ios.js
// Import Library to help create components
import React from 'react';
import {
    Text,
    AppRegistry
} from 'react-native';


// create component
const APP = () => {
  return (
     <Text>SOme Text</Text>
  );
}
// render component
AppRegistry.registerComponent('AlbumsApp', () => APP)

