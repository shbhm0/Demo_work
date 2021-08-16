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
import KidsBanner from '../../../components/KidsBanner';
import SummerEssentials from '../../../components/SummerEssentials';
import {FlatList} from 'react-native-gesture-handler';
import Slider from '../../../components/slider';
import FeatureStrip from '../../../components/featureStrip';
import FullWidthBannerSlider from '../../../components/fullWidthBanner.js';
import TwoColumnGrid from '../../../components/twocolumngrid.js';

const axios = require('axios');
export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        'https://mobilecdn.6thstreet.com/resources/20191010_staging/en-ae/kids.json',
      )
      .then(function (response) {
        console.log('kids', response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        {item.tag === "SEASON'S HOTTEST TRENDS" ? (
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
        {item.tag === 'ShoedRobe' ? (
          <NineGridView
            heading={item.header.title}
            array={item.items}
            tag={item.tag}
          />
        ) : null}
        {item.tag === 'BTS- Top Deals New' ? (
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
        {item.tag === '1.BabyGirl-0-2-Y-Banner' ? (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === '1.BabyGirl-0-2-Y-Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === '2.BabyBoy-0-2-Y-Banner' ? (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === '2.BabyBoy-0-2-Y-Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === '3.ToddlerGirl-2-8-Y-Banner' ? (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === '3.ToddlerGirl-2-8-Y-Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === '4.ToddlerBoy-2-8-Y-Banner' ? (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === '4.ToddlerBoy-2-8-Y-Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === '5.Girl-8+Y-Banner' ? (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === '5.Girl-8+Y-Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}
        {item.tag === '6.Boy-8+Y-Banner' ? (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === '6.Boy-8+Y-Grid' ? (
          <PosterGrid array={item.items} tag={item.tag} />
        ) : null}

        {item.tag === 'New Arrival 2 Grid' ? (
          <TwoGridView heading={item.header.title} array={item.items} />
        ) : null}

        {item.tag === 'Premium Edit-Tommy Hilfiger' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        ) : null}
        {item.tag === 'Premium-Calvin Klein' ||
        item.tag === 'Premium-Polo Ralph Lauren' ||
        item.tag === 'Premium-Michael Kors' ||
        item.tag === 'Premium-Tommy Hilfiger' ? (
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

        {/* Aman Shukla code*/}
        {item.tag == 'BTS-Entry Banner' ? <BTS item={item} /> : null}
        {item.tag == 'Kids Essentials' ? (
          <SummerEssentials item={item} />
        ) : null}

        {item.tag === 'App Highlights' ? <Slider data1={item.items} /> : null}
        {item.tag === 'Feature-Strips' ? (
          <FeatureStrip data1={item.items} />
        ) : null}
        {item.tag === 'Aug-Hero Banner' ? (
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
        {item.tag === 'ModestWear-Brands' ? (
          <View style={styles.twogridContainer}>
            <TwoColumnGrid
              data1={item.items}
              numColumns={2}
              height={vh(190)}
              width={vw(170)}
            />
          </View>
        ) : null}

        {item.tag === 'Brand we love' ? (
          <View style={styles.moreBrands}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={2}
              height={vh(180)}
              width={vw(170)}
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
        {item.tag === 'Explore more-Beauty' ? (
          <KidsBanner array={item.items} tag={item.tag} />
        ) : null}

        {item.tag === 'Explore more-Men' ? (
          <KidsBanner array={item.items} tag={item.tag} />
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
