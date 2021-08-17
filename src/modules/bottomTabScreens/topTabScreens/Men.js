import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {vh, vw, normalize} from '../../../dimension';
import KidsBanner from '../../../components/KidsBanner';
import TwoGridView from '../../../components/TwoGridView';
import NineGridView from '../../../components/NineGridView';
import PosterGrid from '../../../components/PosterGrid';
import Banner from '../../../components/Banner';
import BTS from '../../../components/BTS';
import SummerEssentials from '../../../components/SummerEssentials';
import {FlatList} from 'react-native-gesture-handler';
import Slider from '../../../components/slider';
import FeatureStrip from '../../../components/featureStrip';
import FullWidthBannerSlider from '../../../components/fullWidthBanner.js';
import TwoColumnGrid from '../../../components/twocolumngrid.js';

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
      apicall(ArabicAPI.men);
    } else {
      apicall(APILinks.men);
    }
    // apicall(APILinks.women);
  }, []);
  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        {item.tag === 'Complete Your Shoedrobe' ? (
          <NineGridView
            heading={item.header.title}
            array={item.items}
            tag={item.tag}
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
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === 'Sports Athleisure' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Shoe Trends' ? (
          <TwoGridView heading={item.header.title} array={item.items} />
        ) : null}
        {item.tag === 'Accessories-Grid' ? (
          <View>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoGridView
              data1={item.items}
              numColumns={3}
              height={vh(110)}
              width={vw(107)}
            />
          </View>
        ) : null}

        {item.tag === 'Complete Your Wardrobe-Grid' ? (
          <PosterGrid
            array={item.items}
            tag={item.tag}
            heading={item.header.title}
          />
        ) : null}
        {item.tag === 'Clothing Brands we love' ? (
          <PosterGrid
            array={item.items}
            tag={item.tag}
            heading={item.header.title}
          />
        ) : null}
        {item.tag === 'Traditional Sandals-Banner' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Premium Edit-Tommy Hilfiger' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Premium Edits-Calvin Klein' ? (
          <Banner array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === 'Premium Edits-Lacoste' ? (
          <Banner array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === 'Premium Edits-Cole Haan' ? (
          <Banner array={item.items} tag={item.tag} />
        ) : null}

        {/* Aman Shukla code*/}
        {item.tag == 'BTS-Entry Banner' ? <BTS item={item} /> : null}
        {item.tag == 'Summer Essentials' ? (
          <SummerEssentials item={item} />
        ) : null}

        {item.tag === 'App Highlights' ? <Slider data1={item.items} /> : null}
        {item.tag === 'Feature-Strips' ? (
          <FeatureStrip data1={item.items} />
        ) : null}
        {item.tag === 'Aug-New Page Hero Banner' ? (
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
        {item.tag === 'Brands-Summer-Ready' ? (
          <View style={styles.twogridContainer}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={2}
              height={vh(190)}
              width={vw(170)}
            />
          </View>
        ) : null}
        {item.tag === 'LOOKS  ' ? (
          <View style={styles.moreBrands}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={2}
              height={vh(190)}
              width={vw(170)}
            />
          </View>
        ) : null}
        {item.tag === 'Premium-Tommy Hilfiger ' ||
        item.tag === 'Premium-Calvin Klein' ||
        item.tag === 'Premium-Lacoste' ||
        item.tag === 'Premium-Cole Haan' ? (
          <View style={styles.premiumEdit}>
            {item.header != undefined ? (
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
        {item.type === 'grid' && item.index === 46 ? (
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
        {item.tag === 'Explore more- Women' ? (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Explore more- Kids' ? (
          <KidsBanner array={item.items} tag={item.tag} />
        ) : null}

        {item.tag === 'Explore More-Beauty' ? (
          <KidsBanner array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === 'More Brands' ? (
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
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {data.length == 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          nestedScrollEnabled={false}
          data={data}
          keyExtractor={ite => ite + Math.random()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
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
    marginLeft: vw(10),
    textAlign: 'left',
  },
});
