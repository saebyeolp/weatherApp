import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Image, StyleSheet, Text, View } from 'react-native'
import Content from './components/Content'
import Footer from './components/Footer'
import Form from './components/Form'


const App = () => {
  
  const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'


  const [city, setCity] = useState('Seoul');
  const [temp, setTemp] = useState('');


  const fetchData = () => {
    getWeather(city)
  }

  const getWeather = async city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const api_call = await fetch(url)

    const data = await api_call.json()
    setTemp(data.main.temp)
    

  }

  return (
    <View style={styles.container}>

      <Form
        onSubmit={fetchData}
        onChangeText={text => setCity(text)}
      />

      <Content
        temp={temp}
        // countryCode={weather.sys.countryCode}
        // weather={weather.weather[0].main}
        // city={weather.name}
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