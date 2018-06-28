import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  View,
} from 'react-native';

const AwesomeImage = require('../assets/icon.png');

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    marginTop: 24,
    padding: 8,
    height: 40,
    width: 240,
    borderRadius: 2,
  },
  button: {
    backgroundColor: 'purple',
    padding: 8,
    borderRadius: 2,
    marginTop: 24,
    width: 240,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});

class LoginScreen extends React.Component {
  state = {};

  render() {
    return (
      <KeyboardAvoidingView style={styles.form} behavior="padding" keyboardVerticalOffset={54}>
        <Image
          source={AwesomeImage}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          maxLength={10}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          maxLength={32}
          secureTextEntry
          autoCapitalize="none"
        />
        <View>
          <TouchableOpacity
            onPress={() => alert('Login')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
                Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
