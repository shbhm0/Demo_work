import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import Beauty from './Beauty';
import CustomTopTabBar from '../../../components/customTopTabBar';
import {normalize} from '../../../dimension';
import {useTranslation} from 'react-i18next';
const Tab = createMaterialTopTabNavigator();

export default function TopTabBar() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white', marginTop: normalize(20)}}
      tabBar={props => <CustomTopTabBar {...props} />}
      initialRouteName={'WOMEN'}>
      <Tab.Screen name={t('WOMEN')} component={Women} />
      <Tab.Screen name={t('MEN')} component={Men} />
      <Tab.Screen name={t('KIDS')} component={Kids} />
      <Tab.Screen name={t('BEAUTY')} component={Beauty} />
    </Tab.Navigator>
  );
}
