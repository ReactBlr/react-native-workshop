import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',

  },
});

class ProductCard extends React.Component {
  state = {};

  render() {
    const { navigation, product } = this.props;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Product', product)}
        style={styles.card}
      >
        {console.warn(product)}
        <Text>
          {product.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default ProductCard;
