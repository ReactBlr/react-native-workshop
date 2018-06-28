import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

class ListScreen extends React.Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View>
          <Text>
            This is the List Screen
          </Text>
          <Button
            title="BUTTON"
            onPress={() => navigation.navigate('ProductScreen')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default ListScreen;
