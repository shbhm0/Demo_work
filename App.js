import React from 'react';
import {View, Text} from 'react-native';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  async getMovies() {
    try {
      const response = await fetch(
        'https://mobilecdn.6thstreet.com/resources/20191010_staging/en-ae/men.json',
      );
      const json = await response.json();
      this.setState({data: json});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({isLoading: false});
    }
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    console.log(this.state.data);
    return (
      <View>
        <Text> App </Text>
        <View>
          <Text>Hello</Text>
          <Text>Hello Alok</Text>
          <Text>Aman Shukla</Text>
        </View>
      </View>
    );
  }
}
