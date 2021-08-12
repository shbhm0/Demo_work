import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import {vh, vw} from '/Users/admin/Desktop/Demo_work/src/dimension.js';

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
      <View style={styles.lineSeparator}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: vw(10),
    marginTop: vh(30),
  },
  fullBannerImage: {
    height: vh(350),
    width: vw(340),
    marginRight: vw(15),
  },
  labelFont: {
    fontSize: vh(10),
    marginTop: vh(5),
  },
  lineSeparator: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default FullSlider;
