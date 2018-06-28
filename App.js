import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './navigation/RootNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
});

const App = () => (
  <View style={styles.container}>
    <RootNavigation />
  </View>
);

export default App;
