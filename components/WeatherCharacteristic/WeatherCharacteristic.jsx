import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import { BlurView } from 'expo-blur';
import { useSelector } from "react-redux";


const WeatherCharacteristic = () => {
    const data = useSelector(state => state.currentlyWeather.data)
    if(!data) {
        return <View><Text>Error</Text></View>
    }
    
    return (
        <View style={styles.WeatherCharacteristic}>

            <BlurView style={styles.characteristic} tint="dark" intensity={20}>
                <Text style={styles.title}>Давление</Text>
                <Text style={styles.value}>{data.main.pressure}</Text>
            </BlurView>

            <BlurView style={styles.characteristic} tint="dark" intensity={20}>
                <Text style={styles.title}>Ощущается</Text>
                <Text style={styles.value}>{Math.floor(data.main.feels_like - 273)}°</Text>
            </BlurView>

            <BlurView style={styles.characteristic} tint="dark" intensity={20}>
                <Text style={styles.title}>humidity</Text>
                <Text style={styles.value}>value</Text>
            </BlurView>

            <BlurView style={styles.characteristic} tint="dark" intensity={20}>
                <Text style={styles.title}>wind speed</Text>
                <Text style={styles.value}>value</Text>
            </BlurView>


        </View>
    )
}


const styles = StyleSheet.create({
    WeatherCharacteristic: {
        marginHorizontal: 10,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'center',
        marginBottom: 40,
    },
    characteristic: {
        width: '47%',
        margin: 5,
        padding: 10,
        borderRadius: 6,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center,'
    },
    title: {
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: 14,
        fontWeight: '500'
    },
    value: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
        fontWeight: '600'
    }
})



export default WeatherCharacteristic;