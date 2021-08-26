import React from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import {vh, vw} from '../dimension';

const FullSlider = props => {
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
        horizontal={props.horizontal}
        data={props.data1}
        keyExtractor={item => item.id}
        renderItem={circularSlider}
        disableIntervalMomentum={props.disableIntervalMomentum}
        showsHorizontalScrollIndicator={props.showsHorizontalScrollIndicator}
        pagingEnabled={props.pagingEnabled}
        legacyImplementation={props.legacyImplementation}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: vw(10),
  },
  mainContainer: {
    marginTop: vh(20),
  },
  fullBannerImage: {
    marginRight: vw(10),
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
