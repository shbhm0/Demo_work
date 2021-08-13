import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vh, vw, normalize} from '../dimension';

export default function shoeTrend({heading, array}) {
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.shoeTrends}>
        {array.map(item => (
          <View key={item + Math.random()} style={styles.shoeTrendsInner}>
            <Image source={{uri: item.url}} style={styles.shoeTrendsImage} />
            <View style={styles.textView}>
              <Text style={styles.titleText}>{item.footer.title}</Text>
              <Text style={styles.titleSubText}>{item.footer.subtitle}</Text>
            </View>
          </View>
        ))}
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
    height: vh(186),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shoeTrendsInner: {
    width: vw(172),
    height: vh(150),
  },
  shoeTrendsImage: {
    width: vw(173),
    height: vh(150),
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
