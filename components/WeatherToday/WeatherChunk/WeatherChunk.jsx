import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import { BlurView } from 'expo-blur';



const WeatherChunk = (props) => {
    const dateAndTime = props.date.split(' ')
    const time = dateAndTime[1].split(':')
    time.pop()
    const doneTime = time.join(":")

    const windSpeed = String(props.windSpeed * 3.6).split('.')
    const doneWindSpeed = String(windSpeed[0] + "." + windSpeed[1].split('').shift())




    return (
        <BlurView tint='dark' intensity={20} style={styles.WeatherChunk}>
            <Text style={styles.temp}>{Math.floor(props.temp - 273)}°</Text>
            <Image style={styles.icon} source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }} />
            <Text style={styles.windSpeed}>{doneWindSpeed}км/ч</Text>
            <Text style={styles.time}>{doneTime}</Text>
            
        </BlurView>
    )
}



const styles = StyleSheet.create({
    WeatherChunk: {
        display: "flex",
        marginRight: 6,
        padding: 10,
        borderRadius: 10,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },

    icon: {
        width: 60,
        height: 60,
    },

    temp: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "600",
    },
    time: {
        color: "rgba(0, 0, 0, 0.3)",
        fontSize: 18,
        fontWeight: "400"
    },
    windSpeed: {
        color: "rgba(255, 255, 255, 0.5)",
    },
})



export default WeatherChunk;