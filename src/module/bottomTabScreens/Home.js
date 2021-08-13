import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Women from './topTabScreens/Women';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Women />
    </SafeAreaView>
  );
}
