import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FeedScreen from '../screens/FeedScreen';
import LoginScreen from '../screens/LoginScreen';

// This can also be written as:
//
// export default createBottomTabNavigator(
//   {
//     LoginScreen,
//     ListScreen,
//   },
// );

export default createBottomTabNavigator(
  {
    Home: {
      screen: FeedScreen,
    },
    Profile: {
      screen: LoginScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={24} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'gray',
    },
  },
);
