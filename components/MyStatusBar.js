import React from 'react';
import { StatusBar, View, Platform } from 'react-native';

const MyStatusBar = () => (
  <View>
    <StatusBar
      translucent
      backgroundColor="black"
      animated
    />
    {Platform.OS === 'android' && Platform.Version >= 20 && (
      <View
        style={{
          height: 24,
          backgroundColor: 'purple',
        }}
      />
    )}
  </View>
);

export default MyStatusBar;
