import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import {vh, vw, normalize} from '../../../dimension';
import TwoGridView from '../../../components/TwoGridView';
import NineGridView from '../../../components/NineGridView';
import PosterGrid from '../../../components/PosterGrid';
import Banner from '../../../components/Banner';
import Separator from '../../../components/Separator';
import BTS from '../../../components/BTS';
import SummerEssentials from '../../../components/SummerEssentials';
import {FlatList} from 'react-native-gesture-handler';

const axios = require('axios');
export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(
        'https://mobilecdn.6thstreet.com/resources/20191010_staging/en-ae/women.json',
      )
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
        {item.tag === 'New Shoe Trends' ? (
          <TwoGridView heading={item.header.title} array={item.items} />
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
      </SafeAreaView>
    );
  };

  return (
    <FlatList
      nestedScrollEnabled={false}
      data={data}
      keyExtractor={ite => ite + Math.random()}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  heading: {
    marginHorizontal: vw(10),
    marginVertical: vh(10),
    fontSize: normalize(16),
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
});
