import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {APILinks} from '../constants/index';
import axios from 'axios';
import {vh, vw, normalize, screenWidth, screenHeight} from '../dimensions';
import BTS from '../components/BTS';
import SummerEssentials from "../components/SummerEssentials"

export default function Women(props) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function apicall() {
      await axios
        .get(APILinks.women)
        .then(response => {
          setData(response.data.data);
        })
        .catch(error => {
          console.log('Error: ', error);
        });
    }
    apicall();
  }, [APILinks]);
console.log("Data: ", data)
  const renderData = ({item, index}) => {
    return (
      <View>
        {item.tag == 'BTS-Entry Banner' 
        ?<BTS item = {item} />
        : null}
        {item.tag == 'Summer Essentials- New' 
        ?<SummerEssentials item = {item} />
        : null}
      </View>
    );
  };
  

  console.log('Data: ', data);
  return (
    <View style={styles.mainContainer}>
      {data != null ? (
        <FlatList
          keyExtractor={() => Math.random().toString()}
          data={data}
          renderItem={renderData}
          contentContainerStyle={styles.flatlistStyles}
        />
      ) : (
        <ActivityIndicator size="large" color="grey" />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  flatlistStyles: {
    padding: normalize(10),
  },
 
});
