import * as React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Women from '../../modules/bottomTabScreens/topTabScreens/women';
import TopTabBar from './topTabScreens';
export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopTabBar />
    </SafeAreaView>
  );
}
