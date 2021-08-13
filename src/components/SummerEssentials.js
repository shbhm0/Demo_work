import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {vh, vw, normalize, screenWidth, screenHeight} from '../dimensions';

export default function SummerEssentials({item}) {
  const renderData = ({item}) => {
    return (
      <View style = {styles.imageBox}>
        <Image
          source={{uri: item.url}}
          style={{
            height: vh(130),
            width: vw(130),
            marginVertical: normalize(20),
          }}
        />
        <Text style = {styles.tag}>{item.tag}</Text>
      </View>
    );
  };
  const seperator = () => {
      return(
        <View style = {{width: vw(15)}}>
        </View>
      )
     
  }
  return (
    <View>
      <Text style={styles.title}>{item.title.toUpperCase()}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        keyExtractor={(item, index) => index.toString()}
        data={item.items}
        ItemSeparatorComponent = {seperator}
        renderItem={renderData}
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
  tag: {
    fontSize: 13,
    color: '#222',
  },
  imageBox: {
      alignItems: 'center'
  }
});
