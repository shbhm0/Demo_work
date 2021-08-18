import * as React from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import styles from '../men/styles';
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
const axios = require('axios');
export default function Men({navigation}) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(APILinks.men)
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
      case 'Aug-New Page Hero Banner':
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
      case 'Complete Your Shoedrobe':
        return (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            <TwoGridView
              data1={item.items}
              numColumns={3}
              height={vh(110)}
              width={vw(110)}
              array={item.items}
            />
          </View>
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
      case 'Shoe Trends':
        return (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            {item.header !== undefined ? (
              <Text style={styles.accesGrid}>{item.header.subtitle}</Text>
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

      case 'Running Banner':
        return (
          <Banner
            array={item.items}
            tag={item.tag}
            title={item.header.title}
            subtitle={item.header.subtitle}
          />
        );
      case 'Sport-Brands':
        return (
          <TwoColumnGrid
            data1={item.items}
            numColumns={3}
            height={vh(120)}
            width={vw(106)}
            array={item.items}
          />
        );
      case 'Sports Athleisure':
        return <BTS item={item} />;
      case 'Summer Essentials':
        return <SummerEssentials item={item} />;
      case 'Brands-Summer-Ready':
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
      case 'You May Like VUE Product Slider':
        return <SummerEssentials item={item} />;
      case 'Traditional Sandals-Banner':
        return <BTS item={item} />;

      case 'LOOKS  ':
        return (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            {item.header !== undefined ? (
              <Text style={styles.accesGrid}>{item.header.subtitle}</Text>
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

      case 'Complete Your Wardrobe-Grid':
        return (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            {item.header !== undefined ? (
              <Text style={styles.accesGrid}>{item.header.subtitle}</Text>
            ) : null}
            <TwoColumnGrid
              data1={item.items}
              numColumns={3}
              height={vh(104)}
              width={vw(106)}
              array={item.items}
            />
          </View>
        );
      case 'Premium Edit-Tommy Hilfiger':
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

      case 'Premium Edits-Calvin Klein':
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
      case 'Premium Edits-Lacoste':
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
      case 'Premium Edits-Cole Haan':
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
      case 'Accessories-Grid':
        return (
          <View>
            {item.header !== undefined ? (
              <Text style={styles.sectionHeading}>{item.header.title}</Text>
            ) : null}
            {item.header !== undefined ? (
              <Text style={styles.accesGrid}>{item.header.subtitle}</Text>
            ) : null}
            <TwoColumnGrid
              data1={item.items}
              numColumns={3}
              height={vh(104)}
              width={vw(106)}
              array={item.items}
            />
          </View>
        );

      case 'More Brands':
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
      case 'Explore more- Kids':
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
