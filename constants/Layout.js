import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window').width;

export default {
  window: {
    width,
    height,
  },
};
