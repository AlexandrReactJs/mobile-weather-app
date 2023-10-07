import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from 'react-native'




const OneDayWeather = (props) => {
    const date = props.date.split(' ')

    const getDayName = (date) => {
        const day = new Date(date)
        const days = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота']
        return days[day.getDay()]
    }


    return (
        <View style={styles.OneDayWeather}>
            <View style={styles.dateWrapper}>
                <Image style={styles.icon} source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }} />
                <Text style={styles.date}>{getDayName(date[0])}</Text>
            </View>
            <View style={styles.tempMinMax}>
                <Text style={styles.tempMax}>{Math.ceil(props.tempMax - 273)}°</Text>
                <Text style={styles.splitter}>/</Text>
                <Text style={styles.tempMin}>{Math.floor(props.tempMin - 273)}°</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    OneDayWeather: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dateWrapper: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    date: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
        fontWeight: '600'
    },
    tempMinMax: {
        display: 'flex',
        flexDirection: 'row'
    },
    tempMax: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 18,
        fontWeight: '600'
    },
    splitter: {
        color: 'rgba(255, 255, 255, 0.3)',
        fontSize: 18,
        fontWeight: '600',
        marginHorizontal: 4,
    },
    tempMin: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 18,
        fontWeight: '600'
    },
})



export default OneDayWeather;