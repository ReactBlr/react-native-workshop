import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import LoginScreen from './LoginScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
});

class App extends React.Component {
  state={};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LoginScreen />
      </SafeAreaView>
    );
  }
}

export default App;
