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
    textTransform: 'uppercase',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 13,
    color: '#222',
    textAlign: 'left',
  },
  container: {
    width: '90%',
    marginLeft: '5%',
    marginTop: vh(30),
    marginBottom: vh(-20),
  },
});
