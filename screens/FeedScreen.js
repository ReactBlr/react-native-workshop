import React from 'react';
import { ScrollView, View } from 'react-native';
import ProductCard from '../components/ProductCard';

class FeedScreen extends React.Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <ScrollView>
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
          <ProductCard navigation={navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default FeedScreen;
