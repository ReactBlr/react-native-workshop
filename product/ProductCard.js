import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';

class ProductCard extends React.Component {
  state = {};

  render() {
    const { navigation, product } = this.props;

    const isProductAvailable = product.availability === 'in stock';

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Product', product)}
        activeOpacity={0.8}
        style={styles.card}
      >
        <Image
          style={[
            styles.image,
            { opacity: isProductAvailable ? 1 : 0.5 },
          ]}
          source={{ uri: product.image }}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>
            {product.title}
          </Text>
          {isProductAvailable
            ? (
              <Text style={styles.price}>
                {`₹ ${product.price}`}
              </Text>
            )
            : (
              <Text style={styles.soldOutText}>
                Sold Out
              </Text>
            )
          }
        </View>
      </TouchableOpacity>
    );
  }
}

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 2,
    elevation: 1,
    flexDirection: 'row',
    padding: 8,
  },
  image: {
    height: 120,
    width: 120,
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
  },
  price: {
    paddingTop: 8,
    fontSize: 16,
  },
  soldOutText: {
    paddingTop: 8,
    color: '#fc6c85',
    fontWeight: '500',
  },
});
