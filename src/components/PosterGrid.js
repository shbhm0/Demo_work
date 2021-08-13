import * as React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {vh, vw, normalize} from '../dimension';
import Banner from './Banner';
export default function shoeTrend({heading, array, tag}) {
  if (tag === 'Lingeries-Grid') {
    return (
      <View style={{marginTop: vh(10)}}>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.shoeTrends}>
          <View key={array[0] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[0].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
          <View key={array[1] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[1].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
          <View key={array[2] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[2].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={{marginTop: vh(10)}}>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.shoeTrends}>
          <View key={array[0] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[0].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
          <View key={array[1] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[1].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
          <View key={array[2] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[2].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
        </View>
        <View style={styles.shoeTrends}>
          <View key={array[3] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[3].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
          <View key={array[4] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[4].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
          <View key={array[5] + Math.random()} style={styles.shoeTrendsInner}>
            <Image
              source={{uri: array[5].url}}
              style={styles.shoeTrendsImage}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginHorizontal: vw(16),
    marginVertical: vh(10),
    fontSize: normalize(16),
  },
  shoeTrends: {
    width: vw(356),
    alignSelf: 'center',
    height: vh(130),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: vh(10),
  },
  shoeTrendsInner: {
    width: vw(100),
    height: vh(130),
    marginHorizontal: vw(10),
    marginVertical: vh(4),
  },
  shoeTrendsImage: {
    width: vw(100),
    height: vh(130),
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
