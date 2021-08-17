import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import {vh, vw} from '../dimension.js';

const FullSlider = props => {
  const circularSlider = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <Image style={styles.fullBannerImage} source={{uri: item.url}} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={props.data1}
        keyExtractor={item => item.id}
        renderItem={circularSlider}
        disableIntervalMomentum={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        legacyImplementation={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: vw(10),
    marginTop: vh(30),
  },
  fullBannerImage: {
    height: vh(55),
    width: vw(345),
    marginRight: vw(15),
  },
  labelFont: {
    fontSize: vh(10),
    marginTop: vh(5),
  },
});
export default FullSlider;
