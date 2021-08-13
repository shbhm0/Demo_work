import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Women from './src/modules/bottomTabScreens/topTabScreens/Women';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/route/BottomNavigation';
export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
