import React from 'react';
import {View, StyleSheet} from 'react-native';
import Slider from './src/components/slider';
const App = () => {
  return (
    <View style={styles.container}>
      <Slider />
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
