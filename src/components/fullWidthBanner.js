import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View, Image} from 'react-native';
import {vh, vw} from '../dimensions/dimension';
import {APILinks} from '../constant/index';

const FullSlider = () => {
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
    // console.log(item, 'item');
    const abc = item.items;
    return item.type === 'fullWidthBannerSlider' && item.index == 54
      ? abc.map(ele => {
          console.log(ele.url, 'hellooooo');
          return (
            <View style={styles.mainContainer}>
              <Image style={styles.fullBannerImage} source={{uri: ele.url}} />
            </View>
          );
        })
      : null;
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        data={data}
        keyExtractor={item => item.id}
        renderItem={circularSlider}
        disableIntervalMomentum={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        legacyImplementation={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginLeft: vw(10),
    marginTop: vh(30),
  },
  fullBannerImage: {
    height: vh(350),
    width: vw(340),
    marginRight: vw(15),
  },
  labelFont: {
    fontSize: vh(10),
    marginTop: vh(5),
  },
});
export default FullSlider;
