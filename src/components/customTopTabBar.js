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
import {APILinks} from '../constant/index';
import CustomButton from './CustomButton';
function CustomTopTabBar({apicall}) {
  const {t} = useTranslation();
  const [selectedBtn, setSelectedBtn] = React.useState([
    true,
    false,
    false,
    false,
  ]);

  const ref = React.useRef(null);
  const womenRef = React.useRef(null);
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
        <TouchableOpacity
          onPress={() => {
            apicall(APILinks.women)
            setSelectedBtn([true, false, false, false]);
          }}
          key={Math.random().toString()}
          style={[
            styles.eachTabBtn,
            {
              borderBottomColor: selectedBtn[0] ? '#000' : '#fff',
            },
          ]}>
          <Text
            style={{
              marginVertical: vh(5),
              fontSize: normalize(12),
              fontWeight: selectedBtn[0] ? 'bold' : 'normal',
            }}>
            WOMEN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            apicall(APILinks.men)

            setSelectedBtn([false, true, false, false]);
          }}
          key={Math.random().toString()}
          style={[
            styles.eachTabBtn,
            {borderBottomColor: selectedBtn[1] ? '#000' : '#fff'},
          ]}>
          <Text
            style={{
              marginVertical: vh(5),
              fontSize: normalize(12),
              fontWeight: selectedBtn[1] ? 'bold' : 'normal',
            }}>
            MEN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            apicall(APILinks.kids)

            setSelectedBtn([false, false, true, false]);
          }}
          key={Math.random().toString()}
          style={[
            styles.eachTabBtn,
            {borderBottomColor: selectedBtn[2] ? '#000' : '#fff'},
          ]}>
          <Text
            style={{
              marginVertical: vh(5),
              fontSize: normalize(12),
              fontWeight: selectedBtn[2] ? 'bold' : 'normal',
            }}>
            KIDS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedBtn([false, false, false, true]);
          }}
          key={Math.random().toString()}
          style={[
            styles.eachTabBtn,
            {borderBottomColor: selectedBtn[3] ? '#000' : '#fff'},
          ]}>
          <Text
            style={{
              fontSize: normalize(12),
              marginVertical: vh(5),
              fontWeight: selectedBtn[3] ? 'bold' : 'normal',
            }}>
            BEAUTY
          </Text>
        </TouchableOpacity>
          {/* <CustomButton
            title="WOMEN"
            APILinks={APILinks.women}
            apicall={apicall}
            ref={womenRef}
          />

          <CustomButton title="MEN" APILinks={APILinks.men} apicall={apicall} />
          <CustomButton
            title="KIDS"
            APILinks={APILinks.kids}
            apicall={apicall}
          />
          <CustomButton title="BEAUTY" /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outertoptab: {
    alignItems: 'center',
    marginBottom: vh(20),
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
    width: '23%',
    marginHorizontal: vw(5),
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

export default React.memo(CustomTopTabBar);
