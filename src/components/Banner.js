import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vh, vw, normalize} from '../dimension';

export default function BTS({title, subtitle, array}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image
        source={{uri: array[0].url}}
        style={{
          width: '100%',
          height: vh(190),
          marginVertical: normalize(5),
          alignSelf: 'center',
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
  },
  subtitle: {
    fontSize: 13,
    color: '#222',
  },
  container: {
    width: '90%',
    marginLeft: '5%',
    marginTop: vh(30),
    marginBottom: vh(-20),
  },
});
