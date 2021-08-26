import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vh, vw, normalize} from '../dimension';

export default function Banner({title, subtitle, array}) {
  return (
    <View style={styles.container}>
      {array.header !== undefined ? (
        <Text style={styles.title}>{array.header.title}</Text>
      ) : null}
      {array.header !== undefined ? (
        <Text style={styles.subtitle}>{array.header.subtitle}</Text>
      ) : null}
      <Image
        source={{uri: array.items[0].url}}
        style={{
          width: vw(
            array.items[0].width > 600
              ? array.items[0].width / 3.09
              : array.items[0].width / 1.7,
          ),
          height: vh(
            array.items[0].height > 174
              ? array.items[0].height / 3
              : array.items[0].height / 1.5,
          ),
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
    marginLeft: vw(10),
  },
});
