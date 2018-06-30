import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../components/Header';

const WINDOW_WIDTH = Dimensions.get('window').width;

class ProductScreen extends React.Component {
  handleBuyNow = () => {
    const { navigation: { state: { params } } } = this.props;
    alert(`Handle buy now for ${params.title}`);
  }

  render() {
    const { navigation: { state: { params } } } = this.props;
    const isSoldOut = params.availability === 'out of stock';

    return (
      <View style={styles.container}>
        <Header
          title={params.title}
          subtitle={isSoldOut ? 'Sold Out' : 'In Stock'}
        />
        <ScrollView>
          <Image
            style={styles.image}
            source={{ uri: params.image }}
          />
          <Text style={styles.price}>
            {`₹ ${params.price} `}
          </Text>
          <Text style={styles.description}>
            {params.description}
          </Text>
        </ScrollView>
        <TouchableOpacity
          style={[styles.buyButton, { opacity: isSoldOut ? 0.6 : 1 }]}
          disabled={isSoldOut}
          onPress={this.handleBuyNow}
        >
          <Text style={styles.buyButtonText}>
            {!isSoldOut ? 'Buy Now' : 'Sold Out'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH,
  },
  price: {
    marginTop: 16,
    marginLeft: 16,
    fontWeight: '500',
    fontSize: 28,
  },
  description: {
    padding: 16,
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 4,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
