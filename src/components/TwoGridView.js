import React from 'react';
import {FlatList, StyleSheet, View, Image, Text} from 'react-native';
import {vh, vw, normalize} from '../dimension';

const TwoGridView = props => {
  const circularSlider = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Image
            style={[
              styles.fullBannerImage,
              {height: props.height, width: props.width},
            ]}
            source={{uri: item.url}}
          />
          <View style={styles.textView}>
            {item.footer !== undefined ? (
              <Text style={styles.titleText}>{item.footer.title}</Text>
            ) : null}
            {item.footer !== undefined ? (
              <Text style={styles.titleSubText}>{item.footer.subtitle}</Text>
            ) : null}
          </View>
        </View>
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
    marginBottom: vh(20),
  },
  // mainContainer: {
  //   marginTop: 20,
  // },
  fullBannerImage: {
    marginRight: 10,
  },
  labelFont: {
    fontSize: vh(10),
    marginTop: vh(5),
  },
  textView: {
    width: '100%',
    alignItems: 'center',
    marginVertical: vh(6),
  },
  titleText: {
    color: 'gray',
    fontSize: normalize(11),
  },
  titleSubText: {
    color: 'gray',
    fontSize: normalize(10),
  },
});
export default TwoGridView;
