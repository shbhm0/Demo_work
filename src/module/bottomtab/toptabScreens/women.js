import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {APILinks} from '/Users/admin/Desktop/Demo_work/src/constant/index';
import Slider from '/Users/admin/Desktop/Demo_work/src/components/slider.js';
import FeatureStrip from '/Users/admin/Desktop/Demo_work/src/components/featureStrip.js';
import FullWidthBannerSlider from '/Users/admin/Desktop/Demo_work/src/components/fullWidthBanner.js';
import TwoColumnGrid from '/Users/admin/Desktop/Demo_work/src/components/twocolumngrid.js';
import {vw, vh} from '/Users/admin/Desktop/Demo_work/src/dimension.js';
const Women = props => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(APILinks.women);
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  const circularSlider = ({item}) => {
    return (
      <View>
        {item.type === 'circleItemSlider' ? (
          <Slider data1={item.items} />
        ) : null}
        {item.type === 'fullWidthBannerSlider' && item.index === 29 ? (
          <FeatureStrip data1={item.items} />
        ) : null}
        {item.type === 'fullWidthBannerSlider' && item.index === 54 ? (
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
        {item.type === 'grid' && item.index === 4 ? (
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
        {item.type === 'banner' &&
        (item.index === 20 ||
          item.index === 21 ||
          item.index === 22 ||
          item.index === 23 ||
          item.index === 24) ? (
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
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={circularSlider}
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
  },
  sectionHeading: {
    fontSize: vh(18),
    textTransform: 'uppercase',
    marginLeft: vw(10),
  },
  twogridContainer: {
    marginTop: vh(20),
  },
  moreBrands: {
    marginTop: vh(25),
  },
});
export default Women;
