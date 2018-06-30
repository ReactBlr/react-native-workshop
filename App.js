import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import MyStatusBar from './components/MyStatusBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

class App extends React.Component {
  state = {};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar />
        <Text>
          This boilerplate is noice.
        </Text>
      </SafeAreaView>
    );
  }
}

export default App;
