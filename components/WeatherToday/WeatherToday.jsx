import React from "react";
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherTodayData } from "../../redux/slices/WeatherToday";
import WeatherChunk from "./WeatherChunk/WeatherChunk";

const WeatherToday = () => {
    const dispatch = useDispatch()
    const sity = useSelector(state => state.currentlyWeather.sityName);

    if(!sity){
        console.log("Error")
    }

    React.useEffect(() => {
        dispatch(fetchWeatherTodayData(sity))
    }, [sity])


    const data = useSelector(state => state.weatherToday.data)

    if(!data){
        return(
            <View>
                <Text>
                    Data not found, sorry ;{'('}
                </Text>
            </View>
        )
    } 

    const weatherChunks = data.list.slice(0, 9)
    

    return (
        <View style={styles.WeatherToday}>
            <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={weatherChunks} renderItem={({item}) => <WeatherChunk temp={item.main.temp} icon={item.weather[0].icon} date={item.dt_txt} windSpeed={item.wind.speed}/>}/>
        </View>
    )
}


const styles = StyleSheet.create({
    WeatherToday: {
        marginTop: 30,
        paddingHorizontal: 10,
    },
})



export default WeatherToday;