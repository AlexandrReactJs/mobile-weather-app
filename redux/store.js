import { configureStore } from '@reduxjs/toolkit'
import CurrentlyWeatherReducer  from './slices/CurrentlyWeather'
import WeatherTodayReducer from './slices/WeatherToday'
import WeatherForFiveDaysReducer from './slices/WeatherForFiveDaysSlice'



export const store = configureStore({
  reducer: {
    currentlyWeather: CurrentlyWeatherReducer,
    weatherToday: WeatherTodayReducer,
    weatherForFiveDaysReducer: WeatherForFiveDaysReducer,
    
  },
})
