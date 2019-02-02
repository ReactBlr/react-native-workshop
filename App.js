import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MyStatusBar from './components/MyStatusBar';
import RootNavigation from './navigation/RootNavigation';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

// const showApiCalls = () => {
//   const baseUrl = 'http://www.mocky.io/';
//   global._fetch = fetch;
//   global.fetch = async (uri, options, ...args) => {
//     const response = await global._fetch(uri, options, ...args);
//     if (uri.includes(baseUrl)) {
//       console.log(
//         '🔵 API Call: ',
//         uri,
//         { request: { uri }, response },
//       );
//     }
//     return response;
//   };
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    if (__DEV__) {
      console.disableYellowBox = true;
      // showApiCalls();
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyStatusBar />
        <RootNavigation />
      </SafeAreaView>
    );
  }
}

export default App;
