import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {vh, vw, normalize, screenWidth} from '../dimension';
import Input from './CustomTextInput';
import {useTranslation} from 'react-i18next';

export default function FloatingHeader() {
  const searchRef = React.useRef(null);
  const {t} = useTranslation();

  return (
    <View
      style={{
        width: screenWidth,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
      }}>
      <View style={styles.searchBox}>
        <Image
          source={require('../assets/footerIcons/loupe.png')}
          style={styles.icons}
        />
        <Input
          ref={searchRef}
          style={styles.textInput}
          placeholder={t('What are you looking for?')}
        />
        <Image
          source={require('../assets/footerIcons/voice.png')}
          style={styles.icons}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
