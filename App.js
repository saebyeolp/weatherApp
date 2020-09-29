import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Content from './components/Content'
import Footer from './components/Footer'
import Form from './components/Form'


const App = () => {

  // const images = {
  //   Clear: 'http://ayay.co.uk/mobiles/weather/strange/northern-lights.jpg',
  //   Clouds:
  //     'https://www.princeton.edu/sites/default/files/styles/full_2x/public/images/2018/01/clouds-19.jpg?itok=7jputHX1',
  //   Rain:
  //     'https://i.pinimg.com/736x/54/59/d7/5459d741279e8d72661990f52774473f--cell-phone-wallpapers-gif-photos.jpg'
  // }
  
  const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('Seoul');


  useEffect( () => {
    getWeather();
  }, [city]);

  const getWeather = async () => {
    const api_Call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const response = await api_Call.json();
    setWeather(response);
    console.log(weather);
  };


  return (
    <View style={styles.container}>

      {/* <Image
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        source={{ uri: images[weather] }}
      /> */}

      <Form
        onSubmit={city}
        onChangeText={text => setCity(text)}
      />

      <Content
        temp={weather.main.temp}
        countryCode={weather.sys.countryCode}
        weather={weather.weather[0].main}
        city={weather.name}
      />
      <Footer
        pressure={weather.main.pressure} 
        windSpeed={weather.wind.windSpeed} 
        minTemp={weather.main.minTemp} 
      />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
})

export default App

// code from https://github.com/paulhklam1122/weather-app-wmdd-sept-2020