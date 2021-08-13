import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {vh, vw, normalize, screenWidth, screenHeight} from '../dimension';

export default function BTS({item}) {
  return (
    <View style={{marginLeft: vw(10), marginTop: vh(30)}}>
      <Text style={styles.title}>{item.header.title.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{item.header.subtitle}</Text>
      <Image
        source={{uri: item.items[0].url}}
        style={{
          height: screenHeight / 3,
          width: screenWidth - 2 * normalize(10),
          marginVertical: normalize(20),
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
});
