import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchWeatherForFiveDaysData = createAsyncThunk(
    'WeatherForFiveDays/fetchWeatherForFive',
    async (sity) => {
        const APIKey = '8448efcedad71b585b1da4a171837115';

        const cityDataResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${sity}&limit=1&appid=${APIKey}`)
        const weatherDataResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${cityDataResponse.data[0].lat}&lon=${cityDataResponse.data[0].lon}&appid=${APIKey}`)

        return weatherDataResponse.data
    }
)


const initialState = {
    data: null,
    status: "Loading" /*Loading, Ok, Error */
}



export const WeatherForFiveDaysSlice = createSlice({
    name: "WeatherForFiveDays",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherForFiveDaysData.fulfilled, (state, action) => {
                state.data = action.payload
            })
    }
})


export const { } = WeatherForFiveDaysSlice.actions

export default WeatherForFiveDaysSlice.reducer