import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
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
          <FullWidthBannerSlider data1={item.items} />
        ) : null}
        {item.type === 'grid' && item.index === 4 ? (
          <View style={styles.twogridContainer}>
            <Text style={styles.sectionHeading}>{item.header.title}</Text>
            <TwoColumnGrid data1={item.items} />
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
  },
  sectionHeading: {
    fontSize: vh(18),
    textTransform: 'uppercase',
    marginLeft: vw(10),
  },
  twogridContainer: {
    marginTop: vh(40),
  },
});
export default Women;
