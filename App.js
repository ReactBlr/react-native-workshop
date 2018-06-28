import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import RootNavigation from './navigation/RootNavigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <RootNavigation />
  </SafeAreaView>
);

export default App;
