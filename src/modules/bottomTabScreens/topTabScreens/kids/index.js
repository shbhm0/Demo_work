import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import styles from '../kids/styles';
import {vh, vw, normalize} from '../../../../dimension';
import TwoGridView from '../../../../components/TwoGridView';
import Banner from '../../../../components/Banner';
import BTS from '../../../../components/BTS';
import {FlatList} from 'react-native-gesture-handler';
import Slider from '../../../../components/slider';
import FeatureStrip from '../../../../components/featureStrip';
import FullWidthBannerSlider from '../../../../components/fullWidthBanner';
import TwoColumnGrid from '../../../../components/twocolumngrid';
import {APILinks} from '../../../../constant/index';
import SummerEssentials from '../../../../components/SummerEssentials';
import KidsBanner from '../../../../components/KidsBanner';
const axios = require('axios');
export default function Kids({navigation}) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(APILinks.kids)
      .then(function (response) {
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => {
    switch (item.tag) {
      case 'App Highlights':
        return <Slider data1={item.items} />;
      case 'Feature-Strips':
        return <FeatureStrip data1={item.items} />;
      case 'Aug-Hero Banner':
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
      case 'BTS- Top Deals New':
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
      case 'Hero Banner 2-Adidas AW21':
        return (
          <FullWidthBannerSlider
            data1={item.items}
            horizontal={true}
            disableIntervalMomentum={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            legacyImplementation={false}
            height={vh(140)}
            width={vw(350)}
          />
        );

      case 'ShoedRobe':
        return (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TwoGridView
              data1={item.items}
              numColumns={3}
              height={vh(110)}
              width={vw(107)}
              array={item.items}
            />
          </View>
        );
      case "SEASON'S HOTTEST TRENDS":
        return (
          <View style={styles.twogridContainer}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={2}
              height={vh(170)}
              width={vw(170)}
            />
          </View>
        );

      case 'Brand we love':
        return (
          <View style={styles.twogridContainer}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid
              data1={item.items}
              numColumns={2}
              height={vh(170)}
              width={vw(170)}
            />
          </View>
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
      case 'Premium-Polo Ralph Lauren':
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
      case 'Premium-Michael Kors':
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
      case 'New Arrival 2 Grid':
        return (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}

            <TwoColumnGrid
              data1={item.items}
              numColumns={2}
              height={normalize(230)}
              width={normalize(170)}
              array={item.items}
            />
          </View>
        );
      case 'Exclusive Banner 1080X720':
        return <BTS item={item} />;
      case 'Kids Essentials':
        return <SummerEssentials item={item} />;
      case 'Shop By Age':
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
      case '1.BabyGirl-0-2-Y-Banner':
        return (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case '1.BabyGirl-0-2-Y-Grid':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(108)}
          />
        );
      case '2.BabyBoy-0-2-Y-Banner':
        return (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case '2.BabyBoy-0-2-Y-Grid':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(108)}
          />
        );
      case '3.ToddlerGirl-2-8-Y-Banner':
        return (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case '3.ToddlerGirl-2-8-Y-Grid':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(108)}
          />
        );
      case '4.ToddlerBoy-2-8-Y-Banner':
        return (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case '4.ToddlerBoy-2-8-Y-Grid':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(108)}
          />
        );
      case '5.Girl-8+Y-Banner':
        return (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case '5.Girl-8+Y-Grid':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(108)}
          />
        );
      case '6.Boy-8+Y-Banner':
        return (
          <KidsBanner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case '6.Boy-8+Y-Grid':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(108)}
          />
        );
      case 'Explore more-Beauty':
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
      case 'Explore more-Men':
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
      case 'Explore more- Women':
        return (
          <View style={styles.premiumEdit}>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TouchableOpacity onPress={() => navigation.navigate('WOMEN')}>
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
  };

  return (
    <View style={styles.mainContainer}>
      {data.length == 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          nestedScrollEnabled={false}
          data={data}
          keyExtractor={item => item.index}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}
