import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Kids(){
    return(
        <View style = {styles.mainContainer}>
            <Text>Kids Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})