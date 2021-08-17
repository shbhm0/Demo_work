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
import Banner from '../../../components/Banner';
import BTS from '../../../components/BTS';
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
        'https://mobilecdn.6thstreet.com/resources/20191010_staging/en-ae/men.json',
      )
      .then(function (response) {
        console.log('men', response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <SafeAreaView>
        {item.tag === 'Complete Your Shoedrobe' ? (
          <TwoGridView
            data1={item.items}
            numColumns={3}
            height={vh(110)}
            width={vw(107)}
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
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(110)}
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
          <View>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={3}
              height={vh(120)}
              width={vw(106)}
              array={item.items}
            />
          </View>
        ) : null}
        {item.tag === 'Clothing Brands we love' ? (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TwoColumnGrid
              data1={item.items}
              numColumns={3}
              height={normalize(120)}
              width={normalize(106)}
              array={item.items}
            />
          </View>
        ) : null}
        {item.tag === 'Traditional Sandals-Banner' ? (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
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
        {item.tag === 'Premium Edit-Tommy Hilfiger' ||
        item.tag === 'Premium Edits-Calvin Klein' ||
        item.tag === 'Premium Edits-Lacoste' ||
        item.tag === 'Premium Edits-Cole Haan' ? (
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
