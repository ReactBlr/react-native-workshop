import { createStackNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigation';
import ProductScreen from '../screens/ProductScreen';

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
