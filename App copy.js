import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import Content from './components/Content'
import Footer from './components/Footer'
import Form from './components/Form'


const App = () => {
  
  const API_KEY = 'c8c4865b1ee49f77a87780ffabb644b3'

  const [weather, setWeather] = useState();
  const [city, setCity] = useState('Seoul');
  const [search, setSearch] = useState();

  useEffect( () => {
    getWeather();
  }, [city]);

  const getWeather = async () => {
    const api_Call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const response = await api_Call.json();
    setWeather(response);
    console.log(response);
  };

  const updateSearch = (e) => {
    setSearch(e);
  }

  const getSearch = (e) => {
    setCity(search);
    setSearch('');
  }


  return (
    <View style={styles.container}>

      {/* <Form
        onSubmit={getSearch()}
        onChangeText={updateSearch()}
      /> */}

      <View style={styles.header}>
        <Text style={styles.title}>Open Weather App</Text>
        <TextInput
          style={styles.textInput}
          placeholder={'Input a city name and country code'}
          onSubmit={getSearch}
          onChangeText={updateSearch}
          // onEndEditing={props.onSubmit}
        />
      </View>


      {/* <Content
        temp={weather.main.temp}
        countryCode={weather.sys.countryCode}
        weather={weather.weather[0].main}
        city={weather.name}
      />
      <Footer
        pressure={weather.main.pressure} 
        windSpeed={weather.wind.windSpeed} 
        minTemp={weather.main.minTemp} 
      /> */}

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
  header: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: '100%'
  },
  textInput: {
    width: 300,
    height: 40,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50
  }
})

export default App
