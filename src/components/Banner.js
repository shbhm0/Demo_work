import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vh, vw, normalize} from '../dimension';

export default function Banner({title, subtitle, array}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image
        source={{uri: array[0].url}}
        style={{
          width: vw(345),
          height: vh(230),
          marginVertical: normalize(5),
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#222',
    marginVertical: vh(5),
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 13,
    color: '#222',
  },
  container: {
    marginTop: vh(30),
    marginLeft: vw(10),
  },
});
