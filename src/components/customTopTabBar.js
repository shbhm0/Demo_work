import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import {vh, vw, normalize} from '../dimension';
import Input from './CustomTextInput';
import {useTranslation} from 'react-i18next';

function CustomTopTabBar({state, descriptors, navigation}) {
  const {t} = useTranslation();
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const ref = React.useRef(null);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.outertoptab}>
        <View style={styles.header}>
          <Text style={styles.headingLogo}>{t('6THSTREET')}</Text>
          <View style={styles.iconsBox}>
            <Image
              source={require('../assets/footerIcons/bellN.png')}
              style={styles.icons}
            />
            <Image
              source={require('../assets/footerIcons/bag.png')}
              style={styles.icons}
            />
          </View>
        </View>

        <View style={styles.searchBox}>
          <Image
            source={require('../assets/footerIcons/loupe.png')}
            style={styles.icons}
          />
          <Input
            ref={ref}
            style={styles.textInput}
            placeholder={t('What are you looking for?')}
          />
          <Image
            source={require('../assets/footerIcons/voice.png')}
            style={styles.icons}
          />
        </View>

        <View style={styles.mainContainer}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                key={Math.random().toString()}
                style={[
                  styles.eachTabBtn,
                  {borderBottomColor: isFocused ? '#000' : 'rgba(0,0,0,0)'},
                ]}>
                <Text
                  style={{
                    color: isFocused ? '#000' : '#aaa',
                    fontSize: normalize(12),
                    fontWeight: isFocused ? 'bold' : 'normal',
                    marginVertical: vh(5),
                  }}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outertoptab: {
    alignItems: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headingLogo: {
    fontSize: normalize(20),
    fontWeight: 'bold',
  },
  iconsBox: {
    flexDirection: 'row',
    width: vw(100),
    justifyContent: 'space-evenly',
    position: 'absolute',
    right: 0,
  },
  icons: {
    height: vh(20),
    width: vw(20),
  },
  searchBox: {
    flexDirection: 'row',
    marginVertical: vh(20),
    marginHorizontal: vw(20),
    backgroundColor: '#eee',
    paddingVertical: vh(5),
    paddingHorizontal: vw(10),
    alignItems: 'center',
    borderRadius: normalize(15),
  },
  textInput: {
    flexGrow: 1,
    padding: normalize(5),
    marginHorizontal: vw(5),
  },
  eachTabBtn: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomWidth: normalize(3),
    width: '25%',
  },
  text: {
    fontSize: normalize(20),
    fontWeight: 'bold',
    color: '#fff',
  },
  textPlay: {
    fontSize: normalize(20),
    color: '#fff',
  },
});

export default CustomTopTabBar;
