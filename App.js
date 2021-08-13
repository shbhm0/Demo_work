import React from 'react';
import {View, StyleSheet} from 'react-native';
import Women from './src/module/bottomtab/toptabScreens/women';
const App = () => {
  return (
    <View style={styles.container}>
      <Women />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 100,
  },
});
export default App;
