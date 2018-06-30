import { createStackNavigator } from 'react-navigation';

import FeedScreen from '../screens/FeedScreen';
import ProductScreen from '../screens/ProductScreen';

export default createStackNavigator(
  {
    Home: {
      screen: FeedScreen,
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
