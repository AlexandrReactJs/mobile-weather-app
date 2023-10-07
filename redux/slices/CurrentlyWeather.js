import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchWeatherData = createAsyncThunk(
    'currentlyWeather/fetchWeatherData',


    async (sity) => {
        
        const APIKey = '8448efcedad71b585b1da4a171837115';

       
        const sityDataResponse = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${sity}&limit=1&appid=${APIKey}`)

        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${sityDataResponse.data[0].lat}&lon=${sityDataResponse.data[0].lon}&appid=${APIKey}`)
        return weatherResponse.data       

       
        
    }
)




const initialState = {
    sityName: null,
    data: null,
    status: 'Loading', /*Loading, Ok, Error */
}


export const CurrentlyWeatherSlice = createSlice({
    name: "currentlyWeather",
    initialState,
    reducers: {
        setSityName(state, action) {
            state.cityName = action.payload
        },
        setData(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeatherData.fulfilled, (state, action) => {
                state.data = action.payload
                state.sityName = action.payload.name
            })
    }

})




export const { setData, setSityName } = CurrentlyWeatherSlice.actions

export default CurrentlyWeatherSlice.reducer