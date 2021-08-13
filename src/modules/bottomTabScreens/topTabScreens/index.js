import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Women from "../Women";
import Men from "../men"
import Kids from "../Kids"
import Beauty from "../Beauty"
import CustomTopTabBar from "../../components/customTopTabBar";

const Tab = createMaterialTopTabNavigator();

export default function TopTabBar() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
    tabBar = {props => <CustomTopTabBar {...props}/>}
    initialRouteName = {"WOMEN"}>
      <Tab.Screen name="WOMEN" component={Women} />
      <Tab.Screen name="MEN" component={Men} />
      <Tab.Screen name="KIDS" component={Kids} />
      <Tab.Screen name="BEAUTY" component={Beauty} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}