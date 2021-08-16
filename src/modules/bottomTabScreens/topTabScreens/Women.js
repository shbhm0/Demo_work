import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {vh, vw, normalize} from '../../../dimension';
import TwoGridView from '../../../components/TwoGridView';
import NineGridView from '../../../components/NineGridView';
import PosterGrid from '../../../components/PosterGrid';
import Banner from '../../../components/Banner';
import BTS from '../../../components/BTS';
import SummerEssentials from '../../../components/SummerEssentials';
import {FlatList} from 'react-native-gesture-handler';
import Slider from '/Users/admin/Desktop/Demo_work/src/components/slider.js';
import FeatureStrip from '/Users/admin/Desktop/Demo_work/src/components/featureStrip.js';
import FullWidthBannerSlider from '/Users/admin/Desktop/Demo_work/src/components/fullWidthBanner.js';
import TwoColumnGrid from '/Users/admin/Desktop/Demo_work/src/components/twocolumngrid.js';
import {APILinks} from '../../../constant/index';
import ImageSlider from '../../../components/ImageSlider';
import LineSeperator from '../../../components/LineSeperator';
import HorizontalSlider from '../../../components/horizontalSliderWithPrice';
const axios = require('axios');
export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(APILinks.women)
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        {item.tag === 'TRENDING STYLES' ? (
          <View>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
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
        {item.tag === 'Complete Your Wardrobe-Grid' ? (
          <NineGridView
            heading={item.header.title}
            array={item.items}
            tag={item.tag}
          />
        ) : null}
        {item.tag === 'Bags- Section' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Bags - Brands 3 Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === 'Clothing Brands we love' ? (
          <PosterGrid
            array={item.items}
            tag={item.tag}
            heading={item.header.title}
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
        {item.tag === 'Lingeries-Banner' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Lingeries-Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
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
              height={vh(230)}
              width={vw(170)}
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
              height={vh(170)}
              width={vw(150)}
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
    marginHorizontal: vw(10),
    marginVertical: vh(10),
    fontSize: normalize(16),
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
  },
  titleSubText: {
    color: 'gray',
    fontSize: normalize(10),
  },
  sectionHeading: {
    textTransform: 'uppercase',
    fontSize: vh(17),
    marginTop: vh(30),
    marginLeft: vw(10),
  },
});
