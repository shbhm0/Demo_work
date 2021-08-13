import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Beauty(){
    return(
        <View style = {styles.mainContainer}>
            <Text>Beauty Screen</Text>
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