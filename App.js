import * as React from 'react';

import './src/i18next';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './src/route/BottomNavigation';
export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
