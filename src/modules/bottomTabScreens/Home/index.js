import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  I18nManager,
  Text,
  Animated,
  ScrollView,
} from 'react-native';
import {vh, vw, normalize} from '../../../dimension';
import TwoGridView from '../../../components/TwoGridView';
import Banner from '../../../components/Banner';
import {FlatList} from 'react-native-gesture-handler';
import Slider from '../../../components/slider';
import FullWidthBannerSlider from '../../../components/fullWidthBanner';
import TwoColumnGrid from '../../../components/twocolumngrid';
import {APILinks, ArabicAPI} from '../../../constant/index';
import ImageSlider from '../../../components/ImageSlider';
import LineSeperator from '../../../components/LineSeperator';
import i18n from 'i18next';
import {useTranslation} from 'react-i18next';
import {NavigationEvents} from 'react-navigation';
import RNRestart from 'react-native-restart';
import CustomTopTabBar from '../../../components/customTopTabBar';
import FloatingHeader from '../../../components/FloatingHeader';
import styles from './styles';
const axios = require('axios');
export default function Home({navigation: {setParams}, navigation}) {
  const [data, setData] = React.useState([]);
  const animateY = React.useRef(new Animated.Value(0)).current;
  const {t} = useTranslation();
  async function apicall(APILink) {
    await axios
      .get(APILink)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }
  React.useEffect(() => {
    if (i18n.language === 'ar') {
      apicall(ArabicAPI.women);
    } else {
      apicall(APILinks.women);
    }
  }, []);

  // const MemoizedCallback = React.useCallback(
  //   () => {
  //     return(<CustomTopTabBar apicall={apicall}/>)
  //   },
  //   [],
  // );
  const handleScroll = event => {
    const scrolled = event.nativeEvent.contentOffset.y;
    console.log('Scroleld index: ', scrolled);
    if (scrolled > 116) {
      Animated.timing(animateY, {
        useNativeDriver: true,
        toValue: 100,
        duration: 300,
      }).start();
    } else {
      Animated.timing(animateY, {
        useNativeDriver: true,
        toValue: -scrolled,
        duration: 200,
      }).start();
    }
  };

  const renderItem = ({item}) => {
    switch (item.type) {
      /*circular slider */
      case 'circleItemSlider':
        return <Slider data1={item.items} />;
      /*Feature strip and Hero // shop and win*/
      case 'fullWidthBannerSlider':
        return (
          <View>
            <FullWidthBannerSlider
              data1={item.items}
              horizontal={true}
              disableIntervalMomentum={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              legacyImplementation={false}
              height={vh(item.items[0].height) / 3.09}
              width={vw(item.items[0].width) / 3.09}
            />
          </View>
        );
      /* Whole grid view*/
      case 'grid':
        return (
          <View style={{marginTop: vh(20)}}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            {item.items_per_row === 3 ? (
              <TwoGridView
                data1={item.items}
                numColumns={item.items_per_row}
                height={vh(item.item_height * 1.18)}
                width={vw(item.item_height)}
                array={item.items}
              />
            ) : (
              <View>
                {item.items_per_row === 2 ? (
                  <TwoGridView
                    data1={item.items}
                    numColumns={item.items_per_row}
                    height={vh(item.item_height)}
                    width={vw(item.item_height / 1.35)}
                    array={item.items}
                  />
                ) : (
                  <TwoGridView
                    data1={item.items}
                    numColumns={item.items_per_row}
                    height={vh(item.item_height / 2)}
                    width={vw(item.item_height / 1.65)}
                    array={item.items}
                  />
                )}
              </View>
            )}
          </View>
        );
      /* Banner*/
      case 'banner':
        return <Banner array={item} />;
      /*influencer*/
      case 'influencer_slider':
        return <ImageSlider data={item} />;
      /*Featured Shops*/
      case 'bannerSliderWithLabel':
        return (
          <View>
            {item.title !== undefined ? (
              <Text style={styles.sectionHeading}>{item.title}</Text>
            ) : null}
            {item.items[0].height > 150 ? (
              <FullWidthBannerSlider
                data1={item.items}
                horizontal={true}
                disableIntervalMomentum={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                legacyImplementation={false}
                height={vh(item.items[0].height) / 4.5}
                width={vw(item.items[0].width) / 4.5}
              />
            ) : (
              <FullWidthBannerSlider
                data1={item.items}
                horizontal={true}
                disableIntervalMomentum={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                legacyImplementation={false}
                height={vh(item.items[0].height)}
                width={vw(item.items[0].width)}
              />
            )}
          </View>
        );
    }
    switch (item.type) {
      case 'line_separator':
        return <LineSeperator seperatorWidth={1} seperatorColor={'#efefef'} />;
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <Animated.View
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            zIndex: 1000,
            top: -100,
            transform: [
              {
                translateY: animateY,
              },
            ],
          }}>
          <FloatingHeader />
        </Animated.View>
        <ScrollView
          onScroll={handleScroll}
          >
          <View>
        <CustomTopTabBar apicall={apicall} />
                  <FlatList
          // ListHeaderComponent={() => <CustomTopTabBar apicall={apicall} />}
          keyExtractor={item => item.index}
          onScroll={handleScroll}
          data={data}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlistStyles}
        />
        </View>
        </ScrollView>

        <TouchableOpacity
          style={styles.langIconBox}
          onPress={() => {
            apicall(ArabicAPI.women);
            i18n
              .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
              .then(() => {
                I18nManager.forceRTL(i18n.language === 'ar' ? true : false);
                RNRestart.Restart();
              });
          }}>
          <Image
            source={require('../../../assets/footerIcons/language.png')}
            style={styles.langIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
// JUST CHECKING IF  I CAN PUSH NOW..
