import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

class FeedScreen extends React.Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View>
          <Text>
            This is the FeedScreen
          </Text>
          <Button
            title="BUTTON"
            onPress={() => navigation.navigate('Product')}
          />
        </View>
      </ScrollView>
    );
  }
}

export default FeedScreen;
