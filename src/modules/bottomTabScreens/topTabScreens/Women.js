import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  I18nManager,
} from 'react-native';
import {vh, vw, normalize} from '../../../dimension';
import TwoGridView from '../../../components/TwoGridView';

import Banner from '../../../components/Banner';
import BTS from '../../../components/BTS';
import SummerEssentials from '../../../components/SummerEssentials';
import {FlatList} from 'react-native-gesture-handler';
import Slider from '../../../components/slider';
import RNRestart from 'react-native-restart';
import FeatureStrip from '../../../components/featureStrip';
import FullWidthBannerSlider from '../../../components/fullWidthBanner';
import TwoColumnGrid from '../../../components/twocolumngrid';

import ImageSlider from '../../../components/ImageSlider';
import LineSeperator from '../../../components/LineSeperator';
import {APILinks, ArabicAPI} from '../../../constant/index';
import i18n from 'i18next';
import {useTranslation} from 'react-i18next';
const axios = require('axios');
export default function App() {
  const [data, setData] = React.useState([]);
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
    // apicall(APILinks.women);
  }, []);

  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        {item.tag === 'TRENDING STYLES' ? (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TwoGridView
              data1={item.items}
              numColumns={2}
              height={vh(190)}
              width={vw(170)}
              array={item.items}
            />
          </View>
        ) : null}
        {item.tag === 'Complete Your Shoedrobe' ? (
          <TwoGridView
            data1={item.items}
            numColumns={2}
            height={vh(190)}
            width={vw(170)}
            array={item.items}
          />
        ) : null}
        {item.tag === 'Running Banner' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Sport-Brands' ? (
          <TwoGridView
            data1={item.items}
            numColumns={2}
            height={vh(190)}
            width={vw(170)}
            array={item.items}
          />
        ) : null}
        {/* {item.tag === 'Complete Your Wardrobe-Grid' ? (
        <NineGridView
          heading={item.header.title}
          array={item.items}
          tag={item.tag}
        />
      ) : null} */}
        {item.tag === 'Bags- Section' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Bags - Brands 3 Grid' ? (
          <TwoGridView
            data1={item.items}
            numColumns={2}
            height={vh(190)}
            width={vw(170)}
            array={item.items}
          />
        ) : null}
        {item.tag === 'Clothing Brands we love' ? (
          <TwoGridView
            data1={item.items}
            numColumns={2}
            height={vh(190)}
            width={vw(170)}
            array={item.items}
          />
        ) : null}
        {item.tag === 'Modest Wear-Section' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'ModestWear-Brands' ? (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(106)}
            array={item.items}
          />
        ) : null}
        {item.tag === 'Sports Athleisure' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Lingeries-Banner' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Lingeries-Grid' ? (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={normalize(150)}
            width={vw(107)}
            array={item.items}
          />
        ) : null}
        {/* Aman Shukla code*/}
        {item.tag == 'BTS-Entry Banner' ? <BTS item={item} /> : null}
        {item.tag == 'Summer Essentials- New' ? (
          <SummerEssentials item={item} />
        ) : null}
        {/* shubham's code */}
        {item.type === 'circleItemSlider' ? (
          <Slider data1={item.items} />
        ) : null}
        {item.tag === 'Feature-Strips' ? (
          <FeatureStrip data1={item.items} />
        ) : null}
        {item.tag === 'Aug New lunch Hero banner' ? (
          <FullWidthBannerSlider
            data1={item.items}
            horizontal={true}
            disableIntervalMomentum={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={false}
            height={vh(350)}
            width={vw(340)}
          />
        ) : null}
        {item.tag === 'VUE SLIDER - You May Like' ? (
          <View>
            <Text style={styles.sectionHeading}>{item.layout.title}</Text>
            <FullWidthBannerSlider
              data1={item.items}
              horizontal={true}
              disableIntervalMomentum={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              legacyImplementation={false}
              height={vh(350)}
              width={vw(340)}
            />
          </View>
        ) : null}
        {item.tag === 'Shop & Win' ? (
          <FullWidthBannerSlider
            data1={item.items}
            horizontal={true}
            disableIntervalMomentum={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={false}
            height={vh(100)}
            width={vw(350)}
          />
        ) : null}
        {item.tag === 'Strip Banner' ? (
          <FullWidthBannerSlider
            data1={item.items}
            horizontal={true}
            disableIntervalMomentum={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={false}
            height={vh(150)}
            width={vw(340)}
          />
        ) : null}
        {item.tag === 'TOP BRANDS' ? (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TwoColumnGrid
              data1={item.items}
              numColumns={3}
              height={normalize(230)}
              width={normalize(170)}
              array={item.items}
            />
          </View>
        ) : null}
        {item.tag === 'SHOP BY CATEGORY' ? (
          <View style={styles.twogridContainer}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={3}
              height={vh(110)}
              width={vw(110)}
            />
          </View>
        ) : null}
        {item.tag === 'FEATURED SHOPS' ? (
          <View>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <FullWidthBannerSlider
              data1={item.items}
              horizontal={true}
              disableIntervalMomentum={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              legacyImplementation={false}
              height={normalize(170)}
              width={normalize(150)}
            />
          </View>
        ) : null}
        {item.tag === 'Premium-Tommy Hilfiger ' ||
        item.tag === 'Premium-Calvin Klein' ||
        item.tag === 'Premium-Lacoste' ||
        item.tag === 'Premium-Cole Haan' ||
        item.tag === 'Premium-Guess' ? (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <FullWidthBannerSlider
              data1={item.items}
              height={vh(250)}
              width={vw(355)}
              horizontal={false}
            />
          </View>
        ) : null}
        {item.tag === 'More Brands-4grid' ? (
          <View style={styles.moreBrands}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={4}
              height={vh(60)}
              width={vw(78)}
            />
          </View>
        ) : null}
        {/*Aman's Code*/}
        {item.type == 'line_separator' ? (
          <LineSeperator seperatorWidth={1} seperatorColor={item.color} />
        ) : null}
        {item.type == 'influencer_slider' ? <ImageSlider data={item} /> : null}
      </SafeAreaView>
    );
  };
  return (
    <View style={styles.mainContainer}>
      <View>
        <FlatList
          keyExtractor={() => Math.random().toString()}
          data={data}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlistStyles}
        />
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

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: vw(10),
    marginVertical: vh(10),
    fontSize: normalize(16),
    textAlign: 'left',
  },
  mainContainer: {
    marginTop: normalize(20),
  },
  shoeTrends: {
    width: vw(356),
    alignSelf: 'center',
    height: vh(166),
  },
  shoeTrendsInner: {
    width: vw(172),
    height: vh(140),
  },
  shoeTrendsImage: {
    width: vw(173),
    height: vh(140),
  },
  textView: {
    width: '100%',
    alignItems: 'center',
    marginVertical: vh(6),
    textAlign: 'left',
  },
  titleText: {
    color: 'gray',
    fontSize: normalize(11),
    textAlign: 'left',
  },
  titleSubText: {
    color: 'gray',
    fontSize: normalize(10),
    textAlign: 'left',
  },
  sectionHeading: {
    textTransform: 'uppercase',
    fontSize: vh(17),
    marginTop: vh(30),
    textAlign: 'left',
    marginLeft: vw(10),
  },
  langIconBox: {
    backgroundColor: '#eee',
    height: vh(60),
    width: vw(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(30),
    position: 'absolute',
    right: vw(20),
    bottom: vh(40),
  },
  langIcon: {
    height: vh(30),
    width: vw(30),
  },
});
