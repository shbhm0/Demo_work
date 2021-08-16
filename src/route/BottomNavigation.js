import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../modules/bottomTabScreens/Home';
import Brands from '../modules/bottomTabScreens/Brands';
import Account from '../modules/bottomTabScreens/Account';
import Categories from '../modules/bottomTabScreens/Categories';
import Wishlist from '../modules/bottomTabScreens/Wishlist';
import {vh, vw, normalize} from '../dimension';
import Index from '../modules/bottomTabScreens/topTabScreens/index';
import {useTranslation} from 'react-i18next';
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: 'white'}}>
      <Tab.Group
        screenOptions={{
          backgroundColor: 'red',
        }}>
        <Tab.Screen
          name={t('Home')}
          component={Index}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/home.png')}
                  />
                </View>
              ) : (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/home-active.png')}
                  />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name={t('Categories')}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/categories.png')}
                  />
                </View>
              ) : (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/loupe.png')}
                  />
                </View>
              );
            },
          }}
          component={Categories}
        />
        <Tab.Screen
          name={t('Brands')}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/price.png')}
                  />
                </View>
              ) : (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/price-tags.png')}
                  />
                </View>
              );
            },
          }}
          component={Brands}
        />
        <Tab.Screen
          name={t('Wishlist')}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/heartActive.png')}
                  />
                </View>
              ) : (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/heart.png')}
                  />
                </View>
              );
            },
          }}
          component={Wishlist}
        />
        <Tab.Screen
          name={t('Account')}
          options={{
            tabBarIcon: ({focused}) => {
              return focused ? (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/userActive.png')}
                  />
                </View>
              ) : (
                <View style={styles.container}>
                  <Image
                    style={styles.icon}
                    resizeMode="center"
                    source={require('../assets/footerIcons/user.png')}
                  />
                </View>
              );
            },
          }}
          component={Account}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    width: vw(22),
    height: normalize(100),
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});
