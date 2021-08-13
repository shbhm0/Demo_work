import * as React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {vh, vw, normalize} from '../dimension';

export default function shoeTrend({heading, array, tag}) {
  return (
    <View style={{marginTop: vh(10)}}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.shoeTrends}>
        <View key={array[0] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[0].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[0].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
        <View key={array[1] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[1].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[1].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
        <View key={array[2] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[2].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[2].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.shoeTrends}>
        <View key={array[3] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[3].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[3].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
        <View key={array[4] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[4].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[4].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
        <View key={array[5] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[5].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[5].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.shoeTrends}>
        <View key={array[6] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[6].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[6].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
        <View key={array[7] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[7].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[7].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
        <View key={array[8] + Math.random()} style={styles.shoeTrendsInner}>
          <Image source={{uri: array[8].url}} style={styles.shoeTrendsImage} />
          <View style={styles.textView}>
            {tag === 'Clothing Brands we love' ? null : (
              <Text style={styles.titleSubText}>
                {array[8].footer.subtitle}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginHorizontal: vw(10),
    marginVertical: vh(10),
    fontSize: normalize(16),
  },
  shoeTrends: {
    width: vw(356),
    alignSelf: 'center',
    height: vh(120),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shoeTrendsInner: {
    width: vw(100),
    height: vh(100),
    marginHorizontal: vw(10),
    marginVertical: vh(4),
  },
  shoeTrendsImage: {
    width: vw(100),
    height: vh(90),
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
