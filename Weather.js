import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = { 
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#fff94c", "#004ff9"],
        title: "Thunderstorm",
        subtitle: "Stay inside"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#ffffff", "#076585"],
        title: "Drizzle",
        subtitle: "Buzz Buzz"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#4b79a1","#283e51"],
        title: "Rain",
        subtitle: "I'm singing in the rain~ ♩♬"
    },
    Snow: {
        iconName: "snowflake",
        gradient: ["#eef2f3", "#8e9eab"],
        title: "Snow",
        subtitle: "Do you wanna build a snowman?"
    },
    Clear: {
        iconName: "white-balance-sunny",
        gradient: ["#F2C94C", "#F2994A"],
        title: "Clear",
        subtitle: "Hanging out with me?"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#d7d2cc", "#304352"],
        title: "Clouds",
        subtitle: "Cloud nine"
    },
    Haze: {
        iconName: "weather-fog",
        gradient: ["#b6fbff", "#83a4d4"],
        title: "Haze",
        subtitle: "Watch out!"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#b6fbff", "#83a4d4"],
        title: "Mist",
        subtitle: "Watch out!"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#eacda3", "#d6ae7b"],
        title: "Dust",
        subtitle: "Fucking China"
    },
}

export default function Weather({ temp, condition }){
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style = {styles.halfcontainer}>
        <MaterialCommunityIcons 
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}ºC</Text>
      </View>
      <View style = {{...styles.halfcontainer, ...styles.textContainer}}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",,
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 40,
        color: "white"
    },
    halfcontainer: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});