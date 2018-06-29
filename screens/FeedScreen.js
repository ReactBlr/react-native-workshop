import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View, Text, Image } from 'react-native';
import ProductCard from '../components/ProductCard';

const GET_DATA_URL = 'http://www.mocky.io/v2/5b35cb7c2f0000692d3763c5';
const AwesomeImage = require('../assets/icon.png');

class FeedScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    this.callApi();
  }

  callApi = async () => {
    try {
      const response = await fetch(GET_DATA_URL);
      const { data } = await response.json();
      this.setState({ isLoading: false, data });
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { navigation } = this.props;
    const { isLoading, data } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={AwesomeImage} />
          <Text style={styles.headerText}>
            Simple shopping app
          </Text>
        </View>
        {isLoading
          ? <ActivityIndicator style={styles.activityIndicator} size="large" />
          : (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ProductCard
                  product={item}
                  navigation={navigation}
                />
              )}
            />
          )}
      </View>
    );
  }
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: 'purple',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    height: 32,
    width: 32,
  },
  headerText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '400',
    fontSize: 16,
  },
  activityIndicator: {
    paddingTop: 40,
  },
});
