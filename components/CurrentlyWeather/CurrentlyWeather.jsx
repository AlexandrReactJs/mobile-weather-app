import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeatherData } from '../../redux/slices/CurrentlyWeather';
import Location from '../Location/Location';
import { BlurView } from 'expo-blur';


const CurrentlyWeather = () => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.currentlyWeather.data);



    React.useEffect(() => {
        dispatch(fetchWeatherData('moscow'))
    }, [dispatch])




    if (!data) {
        return (
            <View>
                <Text>Loading ...</Text>
            </View>
        )
    }

    return (
        <View style={styles.currentlyWeather}>

            <View style={styles.tempInfo}>

                <View style={styles.tempWrapper}>
                    <Image style={styles.img} source={{ uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` }} />
                    <Text style={styles.temp}>{Math.round(data.main.temp - 273)}°</Text>
                </View>
                <Text style={styles.tempMinMax}>
                    {`${Math.ceil(data.main.temp_max - 273)}°/${Math.floor(data.main.temp_min - 273)}°`}
                </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    currentlyWeather: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'column',

    },
    tempInfo: {
        display: 'flex',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'column',

    },
    tempWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    temp: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 82,
        fontWeight: '400',
        fontFamily: 'notoserif',
    },
    tempMinMax: {
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: '600',
    },
    img: {
        width: 80,
        height: 80,
    },
});


export default CurrentlyWeather;