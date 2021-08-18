import * as React from 'react';
import {View, Text, TouchableOpacity, Image, I18nManager} from 'react-native';
import {vh, vw, normalize} from '../../../../dimension';
import TwoGridView from '../../../../components/TwoGridView';
import Banner from '../../../../components/Banner';
import BTS from '../../../../components/BTS';
import {FlatList} from 'react-native-gesture-handler';
import Slider from '../../../../components/slider';
import FeatureStrip from '../../../../components/featureStrip';
import FullWidthBannerSlider from '../../../../components/fullWidthBanner';
import TwoColumnGrid from '../../../../components/twocolumngrid';
import {APILinks, ArabicAPI} from '../../../../constant/index';
import ImageSlider from '../../../../components/ImageSlider';
import LineSeperator from '../../../../components/LineSeperator';
import i18n from 'i18next';
import {useTranslation} from 'react-i18next';
import {NavigationEvents} from 'react-navigation';
import RNRestart from 'react-native-restart';
import styles from '../women/styles';
const axios = require('axios');
export default function Women({navigation}) {
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
  }, []);

  const renderItem = ({item}) => {
    switch (item.tag) {
      case 'App Highlights- New-1':
        return <Slider data1={item.items} />;
      case 'Feature-Strips':
        return <FeatureStrip data1={item.items} />;
      case 'Aug New lunch Hero banner':
        return (
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
        );
      case 'Shop & Win':
        return (
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
        );

      case 'TRENDING STYLES':
        return (
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
        );
      case 'BTS-Entry Banner':
        return <BTS item={item} />;
      case 'Strip Banner':
        return (
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
        );
      case 'Exclusive-Banner':
        return <BTS item={item} />;
      case 'SHOP BY CATEGORY':
        return (
          <View style={styles.twogridContainer}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={3}
              height={vh(110)}
              width={vw(110)}
            />
          </View>
        );
      case 'FEATURED SHOPS':
        return (
          <View>
            <Text style={styles.sectionHeading}>{item.title}</Text>
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
        );
      case 'TOP BRANDS':
        return (
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
        );
      case 'Modest Wear-Section':
        return (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case 'ModestWear-Brands':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(106)}
            array={item.items}
          />
        );
      case 'Lingeries-Banner':
        return (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case 'Lingeries-Grid':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(140)}
            width={vw(106)}
            array={item.items}
          />
        );
      case 'Premium-Tommy Hilfiger':
        return (
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
        );
      case 'Premium-Calvin Klein':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <FullWidthBannerSlider
              data1={item.items}
              height={vh(270)}
              width={vw(355)}
              horizontal={false}
            />
          </View>
        );
      case 'Premium-Lacoste':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <FullWidthBannerSlider
              data1={item.items}
              height={vh(270)}
              width={vw(355)}
              horizontal={false}
            />
          </View>
        );
      case 'Premium-Cole Haan':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <FullWidthBannerSlider
              data1={item.items}
              height={vh(270)}
              width={vw(355)}
              horizontal={false}
            />
          </View>
        );
      case 'Premium-Guess':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <FullWidthBannerSlider
              data1={item.items}
              height={vh(270)}
              width={vw(355)}
              horizontal={false}
            />
          </View>
        );
      case 'Influencer Slider':
        return <ImageSlider data={item} />;
      case 'More Brands-4grid':
        return (
          <View style={styles.moreBrands}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={4}
              height={vh(60)}
              width={vw(78)}
            />
          </View>
        );
      case 'Explore More-Beauty':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TouchableOpacity onPress={() => navigation.navigate('BEAUTY')}>
              <FullWidthBannerSlider
                data1={item.items}
                height={vh(100)}
                width={vw(355)}
                horizontal={false}
              />
            </TouchableOpacity>
          </View>
        );
      case 'Explore More-Kids':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TouchableOpacity onPress={() => navigation.navigate('KIDS')}>
              <FullWidthBannerSlider
                data1={item.items}
                height={vh(100)}
                width={vw(355)}
                horizontal={false}
              />
            </TouchableOpacity>
          </View>
        );
      case 'Explore More-Men':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TouchableOpacity onPress={() => navigation.navigate('MEN')}>
              <FullWidthBannerSlider
                data1={item.items}
                height={vh(100)}
                width={vw(355)}
                horizontal={false}
              />
            </TouchableOpacity>
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
        <FlatList
          keyExtractor={item => item.index}
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
            source={require('../../../../assets/footerIcons/language.png')}
            style={styles.langIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
// JUST CHECKING IF  I CAN PUSH NOW..