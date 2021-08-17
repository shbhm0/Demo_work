import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vh, vw, normalize} from '../dimension';

export default function BTS({title, subtitle, array}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image
        source={{uri: array[0].url}}
        style={{
          width: vw(355),
          height: vh(100),
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: '#222',
  },
  subtitle: {
    fontSize: 13,
    color: '#222',
    marginBottom: vh(15),
  },
  container: {
    width: '90%',
    marginLeft: vw(10),
    marginRight: vw(10),
  },
});
