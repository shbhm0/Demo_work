import React from 'react';
import {FlatList, Text, StyleSheet, View, Image} from 'react-native';
import {
  vh,
  vw,
  normalize,
} from '/Users/admin/Desktop/Demo_work/src/dimension.js';

const Slider = props => {
  const circularSlider = ({item}) => {
    return (
      <View style={styles.upperContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.roundImageContainer}>
            <Image style={styles.roundImage} source={{uri: item.image_url}} />
          </View>
          <Text style={styles.labelFont}>{item.label}</Text>
        </View>
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
        showsHorizontalScrollIndicator={false}
        legacyImplementation={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  mainContainer: {
    alignItems: 'center',
    textAlign: 'auto',
    height: vh(100),
    width: vw(100),
  },
  upperContainer: {
    flexDirection: 'row',
  },
  roundImage: {
    height: vh(75),
    width: vw(75),
    borderRadius: normalize(50),
  },
  fullBannerImage: {
    height: vh(40),
    width: vw(345),
    marginRight: vw(15),
  },
  roundImageContainer: {
    height: vh(85),
    width: vw(85),
    borderWidth: 0.5,
    borderColor: 'pink',
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelFont: {
    fontSize: vh(10),
    marginTop: vh(5),
  },
});
export default Slider;
