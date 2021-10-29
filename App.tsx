import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Calculator } from './src/Screens/Calculator'

import { SafeAreaView, StyleSheet } from 'react-native'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} backgroundColor="#0066CC" translucent={false} />
      <Calculator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },

  legend: {
    fontSize: 12,
    color: '#262626',
  },
  container: {
    backgroundColor: '#17181A',
    display: 'flex',
    flex: 1,
    padding: 20,
  },

  containerText: {
    marginTop: 15,
  },

  desc: {
    fontSize: 14,
    textAlign: 'justify',
  },
  paragraph: {
    textAlign: 'justify',
  },
  paragraphTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 220,
  },
  paragraphLast: {
    paddingBottom: 100,
    textAlign: 'justify',
  },
})
