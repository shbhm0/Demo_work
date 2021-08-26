import React, {useState, forwardRef, useImperativeHandle} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  unstable_enableLogBox,
} from 'react-native';
import {vh, vw, normalize} from '../dimension';
import Input from './CustomTextInput';
import {useTranslation} from 'react-i18next';

const CustomButton = forwardRef(({title, APILinks, apicall}, ref) => {
  const {t} = useTranslation();

  const [data, setButtonData] = useState(false);
  const getData = () => data;
  const setData = () => {
    setButtonData(!data);
  };
  useImperativeHandle(ref, () => {
    return {
      getData: getData,
      setData: setData,
    };
  });

  return (
    <TouchableOpacity
      onPress={() => {
        apicall(APILinks);
      }}
      style={[styles.eachTabBtn]}>
      <Text
        style={{
          marginVertical: vh(5),
          fontSize: normalize(12),
          //   fontWeight: selectedBtn[0] ? 'bold' : 'normal',
        }}>
        {t(title)}
      </Text>
    </TouchableOpacity>
  );
});
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

export default CustomButton;
