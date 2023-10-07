import React from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from "../../redux/slices/CurrentlyWeather";
import searchIcon from '../../assets/icons/search.png';

const Location = () => {
    const dispatch = useDispatch();


    const [sity, setCity] = React.useState('Moscow')

    const getWeatherData = (sity) => {
        dispatch(fetchWeatherData(sity))
       
    }

    return (
        <View style={styles.Location}>
            <TextInput style={styles.sityInput} onChangeText={setCity} value={sity} />
            <TouchableOpacity onPress={() => { getWeatherData(sity) }}>
                <Image  style={styles.searchBt} source={searchIcon} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    Location: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    searchBt: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    sityInput: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600'
    },


})

export default Location;