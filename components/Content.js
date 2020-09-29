import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Content = ({temp, countryCode, weather, city}) =>{ 
  return(
    <View style={styles.content}>
      <View>
        {temp ? (
          <Text style={styles.info}>{Math.round(temp)}&#8451;C</Text>
        ) : null}
      </View>
      <View>
        {weather ? <Text style={styles.info}>{weather}</Text> : null}
      </View>
      <View>
        <Text style={styles.cityName}>{city}</Text>
      </View>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent'
  },
  info: {
    fontSize: 50,
    color: 'black',
    paddingLeft: 20,
    paddingTop: 50
  },
  countryName: {
    color: 'black',
    fontSize: 25,
    paddingLeft: 20
  },
  cityName: {
    fontSize: 35,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 25
  }
})

// code from https://github.com/paulhklam1122/weather-app-wmdd-sept-2020
