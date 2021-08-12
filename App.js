import React from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from './src/components/slider';
import FullSlider from './src/components/fullWidthBanner';
import FeatureSctrip from './src/components/featureStrip';
const App = () => {
  return (
    <View style={styles.container}>
      <Slider />
      <FeatureSctrip />
      <FullSlider />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});
export default App;
