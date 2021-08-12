import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import {vh, vw} from '/Users/admin/Desktop/Demo_work/src/dimension.js';

const TwoColumnGrid = props => {
  const circularSlider = ({item}) => {
    console.log(item, 'twocolumn');
    return (
      <View style={styles.mainContainer}>
        <Image style={styles.fullBannerImage} source={{uri: item.url}} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={props.data1}
        keyExtractor={item => item.id}
        renderItem={circularSlider}
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
    height: vh(190),
    width: vw(170),
    marginRight: 15,
    marginBottom: 15,
  },
  labelFont: {
    fontSize: vh(10),
    marginTop: vh(5),
  },
});
export default TwoColumnGrid;
