import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

class ProductScreen extends React.Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View>
          <Text>
            This is the Product Screen
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

export default ProductScreen;
