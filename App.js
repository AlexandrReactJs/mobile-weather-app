import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CurrentlyWeather from './components/CurrentlyWeather/CurrentlyWeather';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { LinearGradient } from 'expo-linear-gradient'
import WeatherToday from './components/WeatherToday/WeatherToday';
import WeatherForFiveDays from './components/WeatherForFiveDays/WeatherForFiveDays';
import Location from './components/Location/Location';
import WeatherCharacteristic from './components/WeatherCharacteristic/WeatherCharacteristic';





export default function App() {
  
  
  return (
    <Provider store={store}>

      <LinearGradient colors={['#3b93ff', '#ff9369']} style={styles.container}>
        <ScrollView>
          <Location/>
          <CurrentlyWeather/>
          <WeatherForFiveDays/>
          <WeatherToday/>
          <WeatherCharacteristic/> 
        </ScrollView>
        <StatusBar style="auto" />
      </LinearGradient>
    </Provider>
  );
}




const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#b5dbff',
    marginTop: 35
  },
  test: {
    width: '100%',
    height: 400,
    backgroundColor: '#fff',
    marginBottom: 20,
  }
});
