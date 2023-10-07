import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'
import { BlurView } from 'expo-blur';
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherForFiveDaysData } from "../../redux/slices/WeatherForFiveDaysSlice";
import OneDayWeather from "./OneDayWeather/OneDayWeather";





const WeatherForFiveDays = () => {
    const dispatch = useDispatch()
    const sity = useSelector(state => state.currentlyWeather.sityName);


    if (!sity) {
        console.log("Error")
    }

    React.useEffect(() => {
        dispatch(fetchWeatherForFiveDaysData(sity))
    }, [sity])

    const data = useSelector(state => state.weatherForFiveDaysReducer.data)

    if (!data) {
        return (
            <View>
                <Text>
                    Loading...
                </Text>
            </View>
        )
    }
    

    const fiveDaysData = [data.list[0], data.list[8], data.list[16], data.list[24], data.list[32]]
    


    return (
        <BlurView tint="dark" intensity={20} style={styles.WeatherForFiveDays}>
            {
                fiveDaysData.map(el => <OneDayWeather tempMax = {el.main.temp_max} tempMin={el.main.temp_min} icon={el.weather[0].icon} date={el.dt_txt}/>)
            }
        </BlurView>
    )
}

const styles = StyleSheet.create({
    WeatherForFiveDays: {
        marginTop: 60,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
    },
})

export default WeatherForFiveDays;