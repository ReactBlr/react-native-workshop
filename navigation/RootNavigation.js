import { createStackNavigator } from 'react-navigation';

import ListScreen from '../screens/ListScreen';
import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator(
  {
    ListScreen: {
      screen: ListScreen,
    },
    LoginScreen: {
      screen: LoginScreen,
    },
    ProductScreen: {
      screen: ProductScreen,
    },
  },
);
