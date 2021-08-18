import React from 'react';
import {View} from 'react-native';

export default function LineSeperator(props) {
  return (
    <View
      style={{
        borderWidth: props.seperatorWidth,
        borderColor: props.seperatorColor,
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 10,
      }}></View>
  );
}
