import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import {vh, vw} from '/Users/admin/Desktop/Demo_work/src/dimension.js';

const TwoColumnGrid = props => {
  const circularSlider = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <Image
          style={[
            styles.fullBannerImage,
            {height: props.height, width: props.width},
          ]}
          source={{uri: item.url}}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data1}
        keyExtractor={item => item.id}
        renderItem={circularSlider}
        numColumns={props.numColumns}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: vw(10),
    marginTop: vh(20),
    // marginBottom: vh(10),
  },
  fullBannerImage: {
    marginRight: 15,
  },
  mainContainer: {
    marginBottom: vh(20),
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
export default TwoColumnGrid;
