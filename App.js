import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import FeedScreen from './screens/FeedScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
});

class App extends React.Component {
  state={};

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar />
        <FeedScreen />
      </SafeAreaView>
    );
  }
}

export default App;
