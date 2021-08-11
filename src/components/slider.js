import React, {useEffect, useState} from 'react';
import {FlatList, Text, StyleSheet, View, Image} from 'react-native';
import {vh, vw, normalize} from '../dimensions/dimension';

const Slider = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        'https://mobilecdn.6thstreet.com/resources/20191010_staging/en-ae/women.json',
      );
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
    return item.type === 'circleItemSlider'
      ? abc.map(ele => {
          return (
            <View style={styles.mainContainer}>
              <View style={styles.roundImageContainer}>
                <Image
                  style={styles.roundImage}
                  source={{uri: ele.image_url}}
                />
              </View>
              <Text style={styles.labelFont}>{ele.label}</Text>
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
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    alignItems: 'center',
    textAlign: 'auto',
    height: vh(100),
    width: vw(100),
  },
  roundImage: {
    height: vh(75),
    width: vw(75),
    borderRadius: normalize(50),
  },
  roundImageContainer: {
    height: vh(85),
    width: vw(85),
    borderWidth: 0.5,
    borderColor: 'pink',
    borderRadius: normalize(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelFont: {
    fontSize: vh(10),
    marginTop: vh(5),
  },
});
export default Slider;
