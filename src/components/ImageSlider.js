import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {normalize, screenHeight, screenWidth, vh, vw} from '../dimension';
import * as InfluencerData from '../assets/influencersData/influencer.json';

export default function ImageSlider(props) {
  const [selectedDot, setSelectedDot] = React.useState(0);
  const scrollRef = React.createRef();

  const setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    setSelectedDot(selectedIndex);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{props.data.title}</Text>
      <Text style={styles.description}>{props.data.description}</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        style={styles.scrollview}
        ref={scrollRef}
        onMomentumScrollEnd={setSelectedIndex}>
        {InfluencerData['influencers'].superstars.WOMEN.map((item, index) => (
          <View key={index}>
            {item.image_url != '' ? (
              <Image style={styles.image} source={{uri: item.image_url}} />
            ) : null}

            <Text style={styles.description}>{item.influencer_name}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.viewAllBtn}>
        <Text style={styles.viewAllText}>View All</Text>
      </TouchableOpacity>
      <View style={styles.dotBox}>
        {InfluencerData['influencers'].superstars.WOMEN.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                height: index === selectedDot ? vh(8) : vh(6),
                width: index === selectedDot ? vw(8) : vw(6),
                backgroundColor: index === selectedDot ? '#000' : '#777',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f5f5f5',
    paddingTop: vh(30),
    paddingBottom: vh(50),
  },
  scrollview: {},
  image: {
    height: vh(200),
    width: screenWidth,
    marginVertical: vh(10),
  },
  dotBox: {
    width: screenWidth - 10,
    flexDirection: 'row',
    position: 'absolute',
    bottom: vh(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    borderRadius: normalize(10),
    margin: normalize(3),
  },
  text: {
    color: 'white',
    fontSize: normalize(16),
    marginBottom: vh(20),
  },
  title: {
    fontSize: normalize(18),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  description: {
    fontSize: normalize(14),
    alignSelf: 'center',
    marginVertical: vh(10),
  },
  viewAllBtn: {
    alignSelf: 'center',
    borderWidth: 1,
    paddingVertical: vh(7),
    paddingHorizontal: vw(20),
    borderRadius: normalize(10),
    marginVertical: vh(10),
  },
});
