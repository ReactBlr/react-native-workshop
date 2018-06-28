import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import DrawerNavigator from './DrawerNavigation';
import ProductScreen from '../screens/ProductScreen';

const doSomething = () => {
  alert('Is this the real life? Is this just fantasy?');
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});

export default createStackNavigator(
  {
    Home: {
      screen: DrawerNavigator,
    },
    Product: {
      screen: ProductScreen,
    },
  },
  {
    navigationOptions: () => ({
      header: null,
    }),
  },
);
