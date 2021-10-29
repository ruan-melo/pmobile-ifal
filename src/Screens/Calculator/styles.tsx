import styled from 'styled-components/native'
import React from 'react'
import { StyleSheet } from 'react-native'

const colors = {
  background: '#17181A',
  blue: '#29A8FF',
  gray: '#303136',
  lightGray: '#A5A5A5',
  darkBlue: '#005DB2',
  lightBlue: '#1991FF',
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerClear: {},
  containerButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export const Container = styled.View`
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`
