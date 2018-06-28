import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const GET_DATA_URL = 'http://www.mocky.io/v2/5b354c2e2f0000190437627c';

const styles = StyleSheet.create({
  activityIndicator: {
    paddingTop: 40,
  },
});

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

    if (isLoading) {
      return (
        <ActivityIndicator style={styles.activityIndicator} size="large" />
      );
    }
    return (
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
    );
  }
}

export default FeedScreen;
