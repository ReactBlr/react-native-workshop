import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import MyStatusBar from './components/MyStatusBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
  },
});

class App extends React.Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar />
        <Text style={styles.title}>
          This boilerplate is noice.
        </Text>
      </SafeAreaView>
    );
  }
}

export default App;
