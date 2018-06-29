import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';

const Header = ({ navigation, title, subtitle }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="ios-arrow-back" size={24} color="purple" />
    </TouchableOpacity>
    <View>
      {!!title && (
        <Text style={styles.title}>
          {title}
        </Text>
      )}
      {!!subtitle && (
        <Text style={styles.subTitle}>
          {subtitle}
        </Text>
      )}
    </View>
  </View>
);

export default withNavigation(Header);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  backButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    left: 0,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
  subTitle: {
    fontWeight: '400',
    fontSize: 12,
  },
});
